import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from 'vuex'
import store from "./store";

import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
import $ from "jquery";
import VCalendar from "v-calendar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

window.jQuery = $;
window.$ = $;

library.add(fas);

Vue.use(VueAxios, axios);
Vue.use(VCalendar);
Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(Vuex);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");