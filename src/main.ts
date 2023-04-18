import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueRouter, { RouteConfig } from 'vue-router';
import 'bootswatch/dist/vapor/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import HomeView from '@/views/HomeView.vue';
import App from './App.vue';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

const routes : Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
];

const router = new VueRouter({ routes });

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
