var React = require('react');
var counter = require('../components/counter');
var container = document.getElementById('container');

React.renderComponent(counter(window.c), container);
