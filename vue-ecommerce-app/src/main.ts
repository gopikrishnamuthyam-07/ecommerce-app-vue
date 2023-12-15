import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

import App from "./App.vue";
import router from "./router";
import i18n from "./components/locale/i18n";

const app = createApp(App);

app.use(router);
app.use(Toast);
app.use(createPinia());

const appInsights = new ApplicationInsights({
  config: {
    connectionString:
      "InstrumentationKey=94e6cf73-75de-4d23-ab6a-330ce26a4c74;IngestionEndpoint=https://southindia-0.in.applicationinsights.azure.com/;LiveEndpoint=https://southindia.livediagnostics.monitor.azure.com/",
  },
});
appInsights.loadAppInsights();
app.config.globalProperties.$appInsights = appInsights as
  | ApplicationInsights
  | undefined;
  
app.use(i18n);
app.mount("#app");
