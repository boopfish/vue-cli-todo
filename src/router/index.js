import VueRouter from "vue-router";
import RoleList from "../components/RoleList";
import UserList from "../components/UserList";
import Vue from "vue";
import UserDetail from "../pages/UserDetail";
import UserEmail from "../pages/UserEmail";
import EmailDetail from "../pages/EmailDetail";

Vue.use(VueRouter);
const router = new VueRouter({
  //默认为hash默认(url后面带着#号) 更改为history后 会取消掉#号 但是当部署到服务器上刷新页面的时候会出现问题
  mode:'history',
  routes: [{
    name: 'UserList',
    path: '/user',
    component: UserList,
    children: [{
      path: 'detail',
      component: UserDetail
    }, {
      name: 'UserEmail',
      path: 'email',
      component: UserEmail,
      children: [{
        name: 'EmailDetail',
        path: 'detail/:receiver/:content',
        component: EmailDetail,
        meta: {title: '邮件详情'},
        // props:{receiver:'001',content:'Hello Vue'} 第一种写法  直接传递数据
        // props: true 第二种写法  直接默认传递params配置中的数据
        //第三种写法 配置一个函数  参数中可以直接获取到route对象
        props(route) {
          return {
            receiver: route.params.receiver,
            content: route.params.content
          }
        },
        //独享路由守卫
        beforeEnter(to, from, next) {
          console.log(to, from);
          next();
        }
      }],
      meta: {title: '用户邮件'}
    }],
    meta: {title: '用户'}
  }, {
    name: 'RoleList',
    path: '/role',
    component: RoleList,
    meta: {title: '角色'}
  }]
})
//前置路由守卫
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next(); //前往指定路由
})

//后置路由守卫
router.afterEach((to, from) => {
  console.log(to, from)
})
export default router;