<template>
  <v-card @click="$router.push('/event/' + event.id)" hover>
    <v-img :src="src" />
    <v-divider />
    <v-container>
      <p class="text-center title text-uppercase">{{ event.data.name }}</p>
      <p class="text-center">{{ event.data.date.toDate().toLocaleDateString() }}</p>
    </v-container>
  </v-card>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/storage'
export default {
  name: 'EventCard',
  props: ['event'],
  data () {
    return {
      src: require('@/assets/logo.svg')
    }
  },
  mounted () {
    firebase.storage().ref('events/' + this.event.id + '/' + this.event.data.thumbnail).getDownloadURL().then(src => {
      this.src = src
    }).catch(() => {
    })
  }
}
</script>

<style scoped>

</style>
