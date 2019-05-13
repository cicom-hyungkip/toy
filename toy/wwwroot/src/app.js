import ES6Lib from './es6codelib'

import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/site.css'

new Vue({
    el: '#app',
    render: h => h(App)
});




module.hot.accept();