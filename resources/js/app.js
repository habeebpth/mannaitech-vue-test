import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";

const app = createApp({});
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

app.use(router);

app.mount("#app");
