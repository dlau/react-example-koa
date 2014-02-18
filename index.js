var koa = require('koa');
var koa_static = require('koa-static');
var views = require('co-views');
var app = koa();
app.use(koa_static(__dirname + '/public'));

/*********
  REACT IN MIDDLEWARE
**********/
var thunkify = require('thunkify');
var react = require('react');
var reactGen = {
  renderComponentToString : thunkify(
    function(component, callback){
      react.renderComponentToString(component, function(html){
        return callback(null,html);
      });
    })
};
app.use(function*(next){
  this.react = reactGen;
  yield next;
});

/*********
  RENDER IN MIDDLEWARE
  CHANGE THIS UP IF YOU WANT TO USE A DIFFERENT TEMPLATING ENGINE
**********/
app.use(function*(next){
  this.render = views('views', {
    map: {
      jade: 'jade'
    },
    default : 'jade'
  });
  yield next;
});

var counterComponent = require('./components/counter');
app.use(function*(next){
  var opts = {count:1};
  var counterHTML = yield this.react.renderComponentToString(counterComponent(opts));
  this.body = yield this.render('index', {container:{counter:counterHTML}, metadata:{counter:opts}});
  this.status=200;
});

app.listen(3000);
console.log('Listening on port 3000!');
