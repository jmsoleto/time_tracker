import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Home from './components/Home.vue'
import TimeEntries from "./components/TimeEntries";
import LogTime from "./components/LogTime"

Vue.config.productionTip = false

//Using the libraries
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: 
  [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/time-entries',
      name: 'TimeEntries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time',
          name: 'LogTime',
          component: LogTime
        }
      ]
    },
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
