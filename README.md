Example of a general react.js work flow/build process using koa to serve pages

Jade is used as the templating engine, you can mix and match any engine that is compatible with `co-views`

This is meant to serve as a more concrete real world type example where the jsx is rendered as part of a build process.

###Build:
--
`gulp`

###Develop (watch):
--
`gulp dev`

###Run:
--
`node --harmony-generators index.js`
You will need node 0.11.x to run this with either the `harmony` flag or `harmony-generators` flag enabled

##Directory structure:
  - components/
   -  counter.js                 
   -  counter.jsx                
  - pagejs/
   -  index.js                   
  - public/
   - js/
    -  index.js                  
  - views/
   -  index.jade                 

- components : houses the react components, these are shared between client and server. The *.jsx files are built to the corresponding .js file
- public : these are the static files
- pagejs : these modules are built with browserify to include react. All of the js files in this directory build into public/js/
- views : where we store our front end templates


###License
---
MIT
