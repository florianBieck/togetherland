<template>
  <div style="position: relative;" ref="container">
    <div>
      <v-img
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
      background: require('../assets/logo.svg'),
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
        imgsrc: require('@/assets/logo.svg'),
        link: '/foo',
        width: 128,
        height: 128,
        clickThrough: false
      },
      {
        position: 'right: 0; top: 0;',
        imgsrc: require('@/assets/logo.svg'),
        link: '/bar',
        width: 128,
        height: 128,
        clickThrough: false
      },
      {
        position: 'left: 0; bottom: 0;',
        imgsrc: require('@/assets/logo.svg'),
        link: '/moo',
        width: 128,
        height: 128,
        clickThrough: false
      },
      {
        position: 'right: 0; bottom: 0;',
        imgsrc: require('@/assets/logo.svg'),
        link: '/star',
        width: 128,
        height: 128,
        clickThrough: false
      },
      {
        position: 'left: 160px; top: 160px;',
        imgsrc: require('@/assets/logo.svg'),
        link: '/tada',
        width: '100%',
        height: '100%',
        clickThrough: false
      },
      {
        position: 'left: 0px; top: 0px;',
        imgsrc: require('@/assets/2iiH.gif'),
        width: this.containerWidth,
        height: this.containerHeight,
        clickThrough: true
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
