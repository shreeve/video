import Vue from 'vue'
import Router from 'vue-router'

import VideoJoin from '@/components/video/VideoJoin'
import VideoCall from '@/components/video/VideoCall'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: VideoJoin
    },
    {
      path: '/r/:roomName',
      name: 'videoCall',
      component: VideoCall
    }
  ]
})
