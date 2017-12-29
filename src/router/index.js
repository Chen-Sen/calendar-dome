import Vue from 'vue'
import Router from 'vue-router'

import Day from '../components/Day/Day.vue'
import Month from '../components/Month/Month.vue'
import Year from '../components/Year/Year.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/day', name: 'Day', component: Day},
    {path: '/month', name: 'Month', component: Month},
    {path: '/year', name: 'Year', component: Year}
  ]
})
