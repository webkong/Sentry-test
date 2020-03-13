import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'http://b8a1f97c3d71466e93653e3b81749d4d@sentry.ushareit.org/4',
  integrations: [new Integrations.Vue({Vue, attachProps: true, logErrors: true})],
});
Vue.config.productionTip = false
Vue.prototype.Sentry = Sentry;
new Vue({
  render: h => h(App),
}).$mount('#app')