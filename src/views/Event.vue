<template>
  <v-container class="mt-5">
    <v-row justify="center" v-if="event.data">
      <v-card max-width="700px" flat class="transparent">
        <p class="text-center title text-uppercase grey--text">Welcome to </p>
        <p class="text-center title text-uppercase">{{ event.data.name }}</p>
        <p>{{ event.data.description }}</p>
        <v-divider class="my-10" />
        <p>Time: {{ event.data.date.toDate().toLocaleDateString() }}</p>
        <v-divider class="my-10" />
        <p class="text-center title text-uppercase">RULES</p>
        <v-list light>
          <v-list-item v-for="(rule, index) in event.data.rules" :key="index">
            <v-list-item-title>{{index + 1}}. {{rule}}</v-list-item-title>
          </v-list-item>
        </v-list>
        <a href="#">FULL RULES</a>
        <v-divider class="my-5" />
        <v-container class="text-center">
          <div v-if="user && joined.length > 0">
            <p class="text-center">Your current status is: {{joined[0].status}}.</p>
            <v-btn rounded color="transparent" min-width="120" class="mx-2" :to="'/map/' + idevent" v-if="joined[0].status === 'accepted'">Event Map</v-btn>
            <v-btn rounded color="error" outlined min-width="120" class="mx-2" @click="exit">Exit</v-btn>
          </div>
          <div v-else-if="user && joined.length === 0">
            <v-btn rounded color="transparent" min-width="120" @click="join">Join</v-btn>
          </div>
          <div v-else>
            <p>Login is required to join an event.</p>
          </div>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
export default {
  name: 'Event',

  props: {
    idevent: {
      type: String
    }
  },

  data () {
    return {
      event: {}
    }
  },

  computed: {
    user () {
      return firebase.auth().currentUser
    },
    joined () {
      return this.event.data.participants.filter(participant => participant.iduser === firebase.auth().currentUser.uid)
    }
  },

  methods: {
    join () {
      firebase.firestore().collection('events').doc(this.idevent).update({
        participants: firebase.firestore.FieldValue.arrayUnion({
          iduser: firebase.auth().currentUser.uid,
          status: 'pending'
        })
      }).then(() => {
        this.$router.push('/map/' + this.idevent)
      })
    },
    exit () {
      firebase.firestore().collection('events').doc(this.idevent).update({
        participants: this.event.data.participants.filter(participant => participant.iduser !== firebase.auth().currentUser.uid)
      }).then(result => {
        console.log(result)
        this.$router.push('/')
      }).catch(error => {
        console.log(error)
      })
    }
  },

  mounted () {
    firebase.firestore().collection('events').doc(this.idevent).onSnapshot(event => {
      this.event = { id: event.id, data: event.data() }
    })
  }
}
</script>

<style scoped>

</style>
