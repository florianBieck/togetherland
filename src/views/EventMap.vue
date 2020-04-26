<template>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-list>
            <v-list-item>
              <v-list-item-title>Room Name: </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Tag Line: </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Description: </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Max. participants: </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Attire: </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Rules: </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Schedule: </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="8">
          <Map />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Map from '../components/Map'
export default {
  name: 'EventMap',
  components: { Map }
}
</script>

<style scoped>

</style>
