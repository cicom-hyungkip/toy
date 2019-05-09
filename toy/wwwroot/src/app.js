import ES6Lib from './es6codelib'

import Vue from 'vue'
import App from './App.vue'

import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css'

import { Grid, GridInstaller } from '@progress/kendo-grid-vue-wrapper'

Vue.use(GridInstaller);

require('./lib')

import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/site.css'

new Vue({
    el: '#app',
    render: h => h(App)
});




module.hot.accept();