import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApiService from "./common/api.service";
import ErrorFilter from "./common/error.filter";

Vue.config.productionTip = false;

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.filter("error", ErrorFilter);

ApiService.init();

// TODO: Ensure we checked auth before each page load.

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
