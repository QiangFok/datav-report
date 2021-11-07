<template>
  <!-- <ve-map :data="chartData" height="1000px"></ve-map>-->
  <ve-bmap :settings="chartSettings"
           :title="title"
           :tooltip="{}"
           :series="chartSeries"
           height="100%"
  >
  </ve-bmap>
</template>

<script>

  const testPoint = [
    {
      name: '南京',
      value: [118.78, 32.04, 100]
    },
    {
      name: '北京',
      value: [116.401969, 39.914935, 200]
    },
    {
      name: '上海',
      value: [121.482265, 31.234447, 195]
    },
    {
      name: '西安',
      value: [108.947741, 34.346415, 150]
    },
    {
      name: '重庆',
      value: [106.553263, 29.568493, 160]
    }
  ]
  const testPoint2 = [
    {
      name: '北京',
      value: [116.401969, 39.914935, 200]
    },
    {
      name: '上海',
      value: [121.482265, 31.234447, 195]
    }
  ]

  export default {
    name: "index",
    data() {
      return {
        /*eslint-disable*/
        chartData: {
          columns: ['位置', '税收'],
          rows: [
            {
              '位置': '上海',
              '税收': 123
            },
            {
              '位置': '北京',
              '税收': 456
            }
          ]
        },
        title: {
          text: '销售数据大盘',
          subtext: '销售趋势统计',
          sublink: 'http://www.tianshow.cn',
          left: 'center'
        },
        chartSeries: [
          {
            name: '销售额',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: testPoint,
            encode: {
              value: 2
            },
            itemStyle: {
              color: 'purple'
            },
            symbolSize: function (val) {
              return val[2] / 10
            },
            label: {
              show: false,
              position: 'right',
              // formatter: '{b}'
              formatter: function (val) {
                return `${val.data.name} - ${val.data.value[2]}`
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          {
            name: 'Top 2',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: testPoint2,
            symbolSize: function (val) {
              return val[2] / 10
            },
            encode: {
              value: 2
            },
            label: {
              formatter: function (val) {
                return `${val.data.name} - ${val.data.value[2]}`
              },
              position: 'right',
              show: true
            },
            hoverAnimation: true,
            rippleEffect: {
              brushType: 'stroke'
            },
            itemStyle: {
              color: 'purple',
              shadowBlur: 10,
              shadowColor: '#333'
            },
          }
        ],
        chartSettings: {
          key: '',
          bmap: {
            key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: false,
            mapStyle: {
              styleJson: [{
                'featureType': 'water',
                'elementType': 'all',
                'stylers': {
                  'color': '#d1d1d1'
                }
              }, {
                'featureType': 'land',
                'elementType': 'all',
                'stylers': {
                  'color': '#f3f3f3'
                }
              }, {
                'featureType': 'railway',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'highway',
                'elementType': 'all',
                'stylers': {
                  'color': '#fdfdfd'
                }
              }, {
                'featureType': 'highway',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'arterial',
                'elementType': 'geometry',
                'stylers': {
                  'color': '#fefefe'
                }
              }, {
                'featureType': 'arterial',
                'elementType': 'geometry.fill',
                'stylers': {
                  'color': '#fefefe'
                }
              }, {
                'featureType': 'poi',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'green',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'subway',
                'elementType': 'all',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'manmade',
                'elementType': 'all',
                'stylers': {
                  'color': '#d1d1d1'
                }
              }, {
                'featureType': 'local',
                'elementType': 'all',
                'stylers': {
                  'color': '#d1d1d1'
                }
              }, {
                'featureType': 'arterial',
                'elementType': 'labels',
                'stylers': {
                  'visibility': 'off'
                }
              }, {
                'featureType': 'boundary',
                'elementType': 'all',
                'stylers': {
                  'color': '#fefefe'
                }
              }, {
                'featureType': 'building',
                'elementType': 'all',
                'stylers': {
                  'color': '#d1d1d1'
                }
              }, {
                'featureType': 'label',
                'elementType': 'labels.text.fill',
                'stylers': {
                  'color': '#999999'
                }
              }]
            }
          }
        }
      }
    }
  }
</script>
