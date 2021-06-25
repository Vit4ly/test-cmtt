import Vue from "vue";
import VueRouter from "vue-router";
import AppUserManagement from "../views/AppUserManagement.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "AppUserManagement",
        component: AppUserManagement,
    },
    // {
    //     path: "/user-management",
    //     name: "AppUserManagement",
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ "../views/AppUserManagement.vue"),
    // },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
