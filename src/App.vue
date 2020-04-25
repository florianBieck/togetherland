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

      <span class="mx-1">John Doe</span>
      <v-avatar class="mx-1">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
      </v-avatar>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>
