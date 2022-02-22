import VueRouter from "vue-router";
import RoleList from "../components/RoleList";
import UserList from "../components/UserList";
import Vue from "vue";

Vue.use(VueRouter);
export default new VueRouter({
    routes: [{
        path: '/user',
        component: UserList
    }, {
        path: '/role',
        component: RoleList
    }]
})