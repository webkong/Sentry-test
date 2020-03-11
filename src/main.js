import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'http://82817fcc1d074e7d99aa1adbf3e72192@sentry.ushareit.org/2',
  integrations: [new Integrations.Vue({Vue, attachProps: true, logErrors: true})],
});
Vue.config.productionTip = false
Vue.prototype.Sentry = Sentry;
new Vue({
  render: h => h(App),
}).$mount('#app')