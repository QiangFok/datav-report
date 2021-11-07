<template>
  <common-card
    title="累计订单量"
    value="¥ 2,157,420"
  >
    <template>
      <v-chart :options="getOption()">
      </v-chart>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">30,000,000</span>
    </template>
  </common-card>
</template>

<script>
  import commonCardMixin from '@/mixins/commonCardMixin'

  export default {
    name: 'index',
    mixins: [commonCardMixin],
    methods: {
      getOption() {
        return {
          xAxis: {
            type: 'category',
            show: false,
            boundaryGap: false
          },
          yAxis: {
            show: false
          },
          series: [{
            type: 'line',
            data: [120, 342, 220, 542, 110, 344, 433, 549, 498, 298, 120, 213],
            areaStyle: {
              color: 'purple'
            },
            lineStyle: {
              width: 0
            },
            itemStyle: {
              opacity: 0
            },
            smooth: true
          }],
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          }
        }
      }
    }
  }
</script>
