import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/site.css'

import JSZip from 'jszip';
window.JSZip = JSZip;

new Vue({
    el: '#app',
    render: h => h(App)
});

module.hot.accept();