<template>
  <common-card
    title="累计用户数"
    value="1,181,014"
  >
    <template>
      <div id="total-users-chart" :style="{width: '100%',height: '100%'}"/>
    </template>
    <template v-slot:footer>
      <div class="total-user-footer">
        <span>日同比 </span>
        <span class="emphasis">8.73%</span>
        <div class="increase"/>
        <span class="month">月同比 </span>
        <span class="emphasis">35.73%</span>
        <div class="decrease"/>
      </div>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from '@/mixins/commonCardMixin'

  export default {
    name: 'index',
    mixins: [commonCardMixin],
    mounted() {
      const charDom = document.getElementById('total-users-chart')
      const chart = this.$echarts.init(charDom)
      chart.setOption({
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            type: 'bar',
            stack: '总量',
            data: [100],
            barWidth: 10,
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            stack: '总量',
            data: [250],
            itemStyle: {
              color: '#eeeeee'
            }
          },
          {
            type: 'custom',
            stack: '总量',
            data: [100],
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])
              return {
                position: endPoint,
                type: 'group',
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z',
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M951.1626 819.412438 72.8374 819.412438 511.999488 204.586538Z',
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
          }
        ]
      })
    }
  }
</script>

<style lang="scss" scoped>
  .total-user-footer {
    display: flex;
    align-items: center;

    .month {
      margin-left: 10px;
    }
  }
</style>
M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z
