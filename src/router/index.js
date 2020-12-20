import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import register from '../components/register.vue'
import Shou from '../components/shuo.vue'
import Search from '../components/搜索商品界面.vue'
import Ding from '../components/ding.vue'
import Personalcenter from '../components/Personalcenter.vue'
import Shopping from '../components/Shopping.vue'
import Shang from '../components/shang.vue'
import Order from '../components/Order.vue'

const originalPush = Router.prototype.push

Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/login', component: Login },
    { path: '/register', component: register },
    { path: '/home', component: Home },
    { path: '/shou', component: Shou },
    { path: '/search', name: "search", component: Search },
    { path: '/ding', component: Ding },
    { path: '/Personalcenter', component: Personalcenter },
    { path: '/shopping', component: Shopping },
    { path: '/shang', name: 'shang', component: Shang },
    { path: '/order', name: 'order', component: Order }
  ],
});

//挂载路由守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  // next('/login') 强制跳转
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if (!tokenStr) return next('/login')
  next()
})

export default router;
