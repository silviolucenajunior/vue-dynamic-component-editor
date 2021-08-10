import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vuelidate);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

