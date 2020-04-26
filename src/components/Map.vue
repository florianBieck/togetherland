<template>
  <div :style="'position: relative; width: 100%; height: ' + this.imgheight + 'px;'" ref="container">
    <div :style="'background-color: #AECB39; height: ' + this.imgheight + 'px;'">
      <v-img
        v-if="background"
        :src="background"
        class="elevation-10"
        contain
        :height="imgheight"
        style="z-index: 0"
      />
    </div>
    <MapEntity
      v-for="(entity, index) in entities"
      :key="index"
      :index="index+1"
      :imgsrc="entity.imgsrc"
      :position="entity.position"
      :link="entity.link"
      :width="entity.width"
      :height="entity.height"
      :click-through="entity.clickThrough"
    />
  </div>
</template>

<script>
import MapEntity from './MapEntity'
export default {
  name: 'Map',
  components: { MapEntity },
  data () {
    return {
      background: null,
      entities: []
    }
  },
  computed: {
    imgheight () {
      return window.innerHeight - 130
    },
    containerWidth () {
      return this.$refs.container.clientWidth
    },
    containerHeight () {
      return this.$refs.container.clientHeight
    }
  },
  methods: {
  },
  mounted () {
    console.log(this.$refs.container)
    this.entities = [
      {
        position: 'left: 0; top: 0;',
        imgsrc: require('@/assets/Veg.png'),
        link: '/foo',
        width: this.containerWidth * 0.25,
        height: 'auto',
        clickThrough: false
      },
      {
        position: 'right: 0; top: 0;',
        imgsrc: require('@/assets/Toolshed.png'),
        link: '/bar',
        width: this.containerWidth * 0.25,
        height: 'auto',
        clickThrough: false
      },
      {
        position: 'left: 0; bottom: 0;',
        imgsrc: require('@/assets/Cabin.png'),
        link: '/moo',
        width: this.containerWidth * 0.25,
        height: 'auto',
        clickThrough: false
      }
    ]
  }
}
</script>

<style scoped>
  .clickable:hover{
    cursor: pointer;
  }
</style>
