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
        name:'EmailDetail',
        path: 'detail/:receiver/:content',
        component: EmailDetail
      }]
    }]
  }, {
    path: '/role',
    component: RoleList
  }]
})