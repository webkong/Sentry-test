import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'http://3c3ba8e1b6e24c479e81f4ee30b2c344@159.138.87.26/2',
  integrations: [new Integrations.Vue({Vue, attachProps: true, logErrors: true})],
});
Vue.config.productionTip = false
Vue.prototype.Sentry = Sentry;
new Vue({
  render: h => h(App),
}).$mount('#app')
