// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

// 自定义组件
const requireComponents = require.context('@/components', true, /\.vue/)
// 打印结果
// 遍历出每个组件的路径
requireComponents.keys().forEach(fileName => {
    // 组件实例
    const reqCom = requireComponents(fileName)
    // 截取路径作为组件名
    const reqComName = reqCom.name || fileName.replace(/\.\/(.*)\.vue/, '$1')
    
    // 组件挂载
    Vue.component(reqComName, reqCom.default || reqCom)
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  ElementUI,
  template: '<App/>'
})

//vue3: createApp(App).use(store).use(router).mount('#app')

// const app = createApp(App);
// app.use(store);
// app.use(router);

// app.mount('#app');
