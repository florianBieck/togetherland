<template>
  <div :style="'position: absolute; ' + position + 'z-index: ' + index + (clickThrough ? 'pointer-events: none;' : '')">
    <v-img
      :src="imgsrc"
      :class="hovered ? 'elevation-10 clickable' : 'clickable'"
      @mouseenter="clickThrough ? {} : hovered = true"
      @mouseleave="clickThrough ? {} : hovered = false"
      @click="clickThrough ? {} : $router.push(link)"
      :min-width="width"
      :width="width"
      :max-width="width"
      :min-height="height"
      :height="height"
      :max-height="height"
    />
    <v-snackbar v-model="hovered">Link: {{ link }}</v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'MapEntity',
  props: [ 'index', 'imgsrc', 'position', 'link', 'width', 'height', 'clickThrough' ],
  data () {
    return {
      hovered: false
    }
  }
}
</script>

<style scoped>
  .clickable:hover{
    cursor: pointer;
  }
</style>
