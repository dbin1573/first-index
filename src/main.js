// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  ElementUI,
  template: '<App/>'
})

//vue3: createApp(App).use(store).use(router).mount('#app')

// const app = createApp(App);
// app.use(store);
// app.use(router);

// app.mount('#app');
