import Vue from 'vue';
import App from './App.vue';
import store from './store';
import * as VueGoogleMaps from 'vue2-google-maps';
import 'bootstrap/dist/css/bootstrap.css';
import '@/assets/css/style.css';
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: ['places', 'geometry']
  },
  installComponents: true
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
