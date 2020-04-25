<template>
  <v-app light style="var(--v-background)">
    <v-app-bar
      app
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-toolbar-title>Togetherland</v-toolbar-title>

      <v-spacer />

      <v-btn text class="mx-1" to="/">Home</v-btn>
      <v-btn text class="mx-1">Join</v-btn>
      <v-btn text class="mx-1">Upcoming</v-btn>
      <v-btn text class="mx-1">Now</v-btn>

      <v-spacer />

      <div v-if="user">
        <span class="mx-1">{{ user.email }}</span>
        <v-avatar class="mx-1" v-if="false">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
        </v-avatar>
        <v-btn color="error" class="ml-3" @click="signout">
          <v-icon>input</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn color="primary" @click="dialogLogin = true">Login</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <router-view/>

      <v-dialog v-model="dialogLogin" max-width="800px">
        <v-card>
          <v-card-title>{{ dialogMode === 'login' ? 'Login' : 'Create new account' }}</v-card-title>
          <v-alert type="error" v-if="error">
            An unexpected error has occurred.
          </v-alert>
          <v-container>
            <v-form>
              <v-text-field label="E-Mail Adress" type="email" prepend-icon="mail" v-model="email" :disabled="loading" />
              <v-text-field label="Password" type="password" prepend-icon="lock" v-model="password" :disabled="loading" />
            </v-form>
            <a style="text-decoration: none;" @click="dialogMode = 'register'" v-if="dialogMode === 'login'">Create an account</a>
            <a style="text-decoration: none;" @click="dialogMode = 'login'" v-if="dialogMode === 'register'">Login into existing account</a>
          </v-container>
          <v-card-actions>
            <v-btn color="primary" @click="login" :loading="loading" :disabled="loading" v-if="dialogMode === 'login'">Login</v-btn>
            <v-btn color="primary" @click="register" :loading="loading" :disabled="loading" v-if="dialogMode === 'register'">Register</v-btn>
            <v-spacer />
            <v-btn color="error" outlined @click="dialogLogin = false" :disabled="loading">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-content>
  </v-app>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'App',
  data () {
    return {
      dialogLogin: false,
      dialogMode: 'login',
      username: '',
      email: '',
      password: '',
      loading: false,
      error: false
    }
  },
  computed: {
    user () {
      return firebase.auth().currentUser
    }
  },
  methods: {
    login () {
      this.loading = true
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(result => {
        console.log(result)
        this.dialogLogin = false
        this.$router.go()
      }).catch(error => {
        console.log(error)
        this.error = true
      }).finally(() => {
        this.email = ''
        this.password = ''
        this.loading = false
      })
    },
    register () {
      this.loading = true
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(result => {
          console.log(result)
          this.dialogMode = 'login'
        }).catch(error => {
          console.log(error)
        }).finally(() => {
          this.email = ''
          this.password = ''
          this.loading = false
        })
    },
    signout () {
      firebase.auth().signOut().finally(() => {
        this.$router.go()
      })
    }
  }
}
</script>
