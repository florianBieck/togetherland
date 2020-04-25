import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase/app'

Vue.config.productionTip = false

let app = ''

const firebaseConfig = {
  apiKey: 'AIzaSyAp33qB9OeITwKe5LSDcT5Jw8wsNQp83Zs',
  authDomain: 'togetherland-d9f12.firebaseapp.com',
  databaseURL: 'https://togetherland-d9f12.firebaseio.com',
  projectId: 'togetherland-d9f12',
  storageBucket: 'togetherland-d9f12.appspot.com',
  messagingSenderId: '200901166991',
  appId: '1:200901166991:web:44d40e09d2e759d54fedfa',
  measurementId: 'G-SXS3QVQQ7S'
}
firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  } else {
    store.commit('setLoggedIn', user !== null)
  }
})
