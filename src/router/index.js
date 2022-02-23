import VueRouter from "vue-router";
import RoleList from "../components/RoleList";
import UserList from "../components/UserList";
import Vue from "vue";
import UserDetail from "../pages/UserDetail";
import UserEmail from "../pages/UserEmail";
import EmailDetail from "../pages/EmailDetail";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [{
    path: '/user',
    component: UserList,
    children: [{
      path: 'detail',
      component: UserDetail
    }, {
      path: 'email',
      component: UserEmail,
      children: [{
        path: 'detail/:receiver/:content',
        component: EmailDetail,

        // props:{receiver:'001',content:'Hello Vue'} 第一种写法  直接传递数据
        // props: true 第二种写法  直接默认传递params配置中的数据
        //第三种写法 配置一个函数  参数中可以直接获取到route对象
        props(route) {
          return {
            receiver: route.params.receiver,
            content: route.params.content
          }
        }
      }]
    }]
  }, {
    path: '/role',
    component: RoleList
  }]
})