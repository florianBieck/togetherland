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
              <p class="text-center title text-uppercase">{{ event.name }}</p>
              <p class="text-center">{{ event.date.toLocaleDateString() }}</p>
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
              <p class="text-center title text-uppercase">{{ event.name }}</p>
              <p class="text-center">{{ event.date.toLocaleDateString() }}</p>
            </v-container>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      events: [
        {
          id: 1,
          name: 'Event Name',
          date: new Date()
        },
        {
          id: 2,
          name: 'Farmville',
          date: new Date()
        }
      ]
    }
  }
}
</script>
