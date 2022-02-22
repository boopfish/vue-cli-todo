import VueRouter from "vue-router";
import RoleList from "../components/RoleList";
import UserList from "../components/UserList";
import Vue from "vue";
import UserDetail from "../pages/UserDetail";
import UserEmail from "../pages/UserEmail";

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
            component: UserEmail
        }]
    }, {
        path: '/role',
        component: RoleList
    }]
})