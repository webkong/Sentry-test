import Vue from 'vue'
import App from './App.vue'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'http://0790e9a93b0145ca8488ed474d89b0b7@159.138.87.26/2',
  integrations: [new Integrations.Vue({Vue, attachProps: true, logErrors: true})],
});
Vue.config.productionTip = false
Vue.prototype.Sentry = Sentry;
new Vue({
  render: h => h(App),
}).$mount('#app')
