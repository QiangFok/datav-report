<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
  import TopView from '../components/TopView'
  import SalesView from '../components/SalesView'
  import BottomView from '../components/BottomView'
  import MapView from '../components/MapView'

  import {
    wordcloud
  } from '../api/index.js'

  export default {
    name: 'Home',
    components: {
      TopView,
      SalesView,
      BottomView,
      MapView
    },
    mounted() {
      wordcloud()
    }
  }
</script>

<style lang="scss">
  .home {
    width: 100%;
    background-color: #eeeeee;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
