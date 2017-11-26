import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FunPackage from '@/pages/FunPackage'
import HideZone from '@/pages/HideZone'
import Share from '@/pages/Share'
import MyNetPan from '@/pages/MyNetPan'
import Session from '@/pages/share/Session'
import Haoyou from '@/pages/share/Haoyou'
import Group from '@/pages/share/Group'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/funpackage',
      name: 'funPackage',
      component: FunPackage
    },{
      path: '/hidezone',
      name: 'hideZone',
      component: HideZone
    },{
      path: '/share',
      name: 'share',
      component: Share,
      redirect: '/share/session',
      children: [{
        path: 'session',
        name: 'session',
        component:Session
      },{
        path: 'haoyou',
        name: 'haoyou',
        component: Haoyou
      },{
        path: 'group',
        name: 'group',
        component: Group
      }]
    },{
      path: '/mynetpan',
      name: 'myNetPan',
      component: MyNetPan
    }
  ]
})
