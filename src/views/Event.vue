<template>
  <v-container class="mt-5">
    <v-row justify="center">
      <v-card max-width="700px" flat class="transparent">
        <p class="text-center title text-uppercase">Welcome to Farmville</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <v-divider class="my-10" />
        <p>Time:    DATE</p>
        <v-divider class="my-10" />
        <p class="text-center title text-uppercase">RULES</p>
        <v-list light>
          <v-list-item>
            <v-list-item-title>1. The quick, brown fox jumps over a lazy dog.</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>1. The quick, brown fox jumps over a lazy dog.</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>1. The quick, brown fox jumps over a lazy dog.</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>1. The quick, brown fox jumps over a lazy dog.</v-list-item-title>
          </v-list-item>
        </v-list>
        <a href="#">FULL RULES</a>
        <v-divider class="my-5" />
        <v-container class="text-center">
          <v-btn to="/map/1" rounded color="transparent" min-width="120">Join</v-btn>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Event',

  mounted () {
    console.log(this.$vuetify.theme)
    this.$vuetify.theme.themes.light.background = '#E6F3F6'
  },
  beforeRouteLeave (to, from, next) {
    // this.$vuetify.theme.themes.light.background = 'white'
    next()
  }
}
</script>

<style scoped>

</style>
