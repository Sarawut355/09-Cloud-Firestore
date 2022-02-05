import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import "firebase/firestore";
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBsmwZLbZ2Wj_pDdKgchr8YYELZey3bOBk",
    authDomain: "cs313-09-355.firebaseapp.com",
    projectId: "cs313-09-355",
    storageBucket: "cs313-09-355.appspot.com",
    messagingSenderId: "413031212298",
    appId: "1:413031212298:web:0db4d430979d4ebb84c6f3"
  };
  firebase.initializeApp(firebaseConfig);
}
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
