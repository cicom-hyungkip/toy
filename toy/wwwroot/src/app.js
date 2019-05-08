import ES6Lib from './es6codelib'

import Vue from 'vue'
import App from './App.vue'

require('./lib')

import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/site.css'


new Vue({
    el: '#app',
    render: h => h(App)
});

document.getElementById("fillthis").innerHTML = getText();
$('#fillthiswithjquery').html('Filled by Jquery!');

let myES6Object = new ES6Lib();
$('#fillthiswithes6lib').html(myES6Object.getData());