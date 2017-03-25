import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import store from './store/store'

Vue.use(VeeValidate);
new Vue({el: '#app', store, render: h => h(App)});

