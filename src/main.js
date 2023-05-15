import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router.js";

// router.beforeEach((to, from, next) => {
//   window.scrollTo(0, 0);
//   next();
// });

const app = createApp(App).use(Antd).use(router);
app.mount("#app");
