import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'http://0d7c76f592664992abcabafda863c8b2@sentry.ushareit.org/2',
  integrations: [new Integrations.Vue({Vue, attachProps: true, logErrors: true})],
});
Vue.config.productionTip = false
Vue.prototype.Sentry = Sentry;
new Vue({
  render: h => h(App),
}).$mount('#app')