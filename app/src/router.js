import Vue from 'vue'
import Router from 'vue-router'

import VideoJoin from '@/components/video/VideoJoin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: VideoJoin
    }
  ]
})
