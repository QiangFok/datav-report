<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"/>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: '天天向上',
              value: 100 * Math.random()
            },
            {
              name: '天天向上',
              value: 100 * Math.random()
            },
            {
              name: '天天向上',
              value: 100 * Math.random()
            },
            {
              name: '天天向上',
              value: 100 * Math.random()
            },
            {
              name: '天天向上',
              value: 100 * Math.random()
            },
            {
              name: '天天向上',
              value: 100 * Math.random()
            },
            {
              name: '天天向上',
              value: 100 * Math.random()
            },
            {
              name: '天天向上',
              value: 100 * Math.random()
            },
            {
              name: '天天向上',
              value: 100 * Math.random()
            }
          ]
        },
        chartSettings: {
          color: ['rgba(97,216,0,.7)', 'rgba(204,178,26,.7)', 'rgba(245,166,035,.7)', 'rgba(156,13,133,.7)']
        }
      }
    }
  }
</script>

<style scoped>

</style>
