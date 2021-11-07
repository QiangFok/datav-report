<template>
  <div id="container">111</div>
</template>

<script>

  import 'echarts-wordcloud'

  export default {
    name: "WordCloud",
    mounted() {
      const chart = this.$echarts.init(document.getElementById('container'))
      chart.setOption({
        series: [
          {
            type: 'wordCloud',
            data: [
              {
                name: 'FokQIang',
                value: 100
              },
              {
                name: 'Huonly',
                value: 50
              },
              {
                name: '数据可视化',
                value: 23
              }
            ],
            shape: 'circle',
            textStyle: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')'
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          }
        ]
      })
    }
  }
</script>

<style lang="scss" scoped>
  #container {
    width: 100%;
    height: 100%;
  }
</style>
