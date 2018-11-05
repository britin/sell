// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

import './common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  // 这里 path: '/' 代表应用首页显示的内容
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
];
const router = new VueRouter({
  // mode指定路由模式，默认'hash'，另一种可选的模式是'history'
  mode: 'history',
  linkActiveClass: 'active',
  routes
});

/* 创建挂载点至#app元素，将内容显示在index.html页面 */
let app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

Vue.use({
  app
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
