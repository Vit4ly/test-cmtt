import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '../src/assets/style/theme.scss'

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
