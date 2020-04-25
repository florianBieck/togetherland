<template>
  <v-container>
    <v-subheader class="headline">UPCOMING</v-subheader>
    <v-row>
      <v-col cols="2" v-for="(event, index) in events" :key="index">
        <v-container>
          <v-card @click="$router.push('/event/' + event.id)" hover>
            <v-img :src="require('@/assets/logo.svg')" />
            <v-divider />
            <v-container>
              <p class="text-center title text-uppercase">{{ event.data.name }}</p>
              <p class="text-center">{{ event.data.date.toDate().toLocaleDateString() }}</p>
            </v-container>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
    <v-subheader class="headline">CATEGORIES</v-subheader>
    <v-row>
      <v-col cols="2" v-for="(event, index) in events" :key="index">
        <v-container>
          <v-card @click="$router.push('/event/' + event.id)" hover>
            <v-img :src="require('@/assets/logo.svg')" />
            <v-divider />
            <v-container>
              <p class="text-center title text-uppercase">{{ event.data.name }}</p>
              <p class="text-center">{{ event.data.date.toDate().toLocaleDateString() }}</p>
            </v-container>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
export default {
  name: 'Home',
  data () {
    return {
      events: []
    }
  },
  mounted () {
    firebase.firestore().collection('events')
      .limit(6)
      .get().then(events => {
        this.events = []
        events.forEach(event => {
          this.events.push({ id: event.id, data: event.data() })
        })
      })
  }
}
</script>
