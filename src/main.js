import { createApp } from "vue";
import App from "./App.vue";

// import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import router from "./router";
createApp(App).use(router).mount("#app");
