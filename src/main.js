import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { createProvider } from "vue-apollo";

Vue.config.productionTip = false;

new Vue({
  apolloProvider: createProvider(),
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
