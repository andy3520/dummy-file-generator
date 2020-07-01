import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/style.scss";

import IconSet from "@/components/icons";
Vue.use(IconSet);

import BaseSet from "@/components/bases";
Vue.use(BaseSet);

import {
  ValidationProvider,
  ValidationObserver
} from "vee-validate/dist/vee-validate.full.esm";
Vue.component(ValidationProvider);
Vue.component(ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
