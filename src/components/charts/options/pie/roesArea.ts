// 环饼图（南丁格尔图）
export default function roseArea(data: any = []) {
  if (!data) return []
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(9,40,84,0.8)',
      borderColor: 'rgba(9,40,84,0.8)',
      textStyle: {
        fontSize: 14,
        color: '#fff',
      },
      formatter: function (params: any) {
        return (
          '<span style="margin-right: 5px; border-radius: 50%; display: inline-block; width:14px; height: 14px; vertical-align: middle; background:linear-gradient( ' +
          params.color.colorStops[0].color +
          ', ' +
          params.color.colorStops[1].color +
          ');"></span>' +
          params.name +
          "&nbsp;&nbsp;<span style='font-weight:bold'>" +
          params.value +
          '</span>'
        )
      },
    },
    polar: {},
    angleAxis: {
      interval: 1,
      type: 'category',
      data: [],
      z: 10,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#0B4A6B',
          width: 1,
          type: 'solid',
        },
      },
      axisLabel: {
        show: false,
        interval: 0,
        color: '#0B4A6B',
        margin: 8,
        fontSize: 14,
      },
    },
    radiusAxis: {
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        formatter: '{value} %',
        show: false,
        padding: [0, 0, 0, 0],
        color: '#0B3E5E',
        fontSize: 14,
      },
    },
    calculable: true,
    series: [
      {
        type: 'pie',
        radius: ['14%', '15%'],
        center: ['50%', '55%'],
        emphasis: {
          scale: false,
        },
        labelLine: {
          show: false,
          length: 20,
          length2: 30,
        },
        data: [
          {
            name: '',
            value: 0,
            itemStyle: {
              color: '#0189cc',
            },
            tooltip: {
              show: false,
            },
          },
        ],
      },
      {
        type: 'pie',
        radius: ['19%', '68%'],
        center: ['50%', '55%'],
        startAngle: 45,
        roseType: 'area', // 展示南丁格尔图
        zlevel: 10,
        label: {
          show: true,
          formatter: function (param: any) {
            return '{a|' + param.name + '}' + '{s|' + ' ' + param.value + '}'
          },
          padding: [0, -80],
          height: 40,
          rich: {
            a: {
              color: '#fff',
              fontSize: '14',
            },
            s: {
              color: '#00ffff',
              fontSize: '14',
            },
          },
          position: 'outside',
        },
        emphasis: {
          label: {
            show: true,
          },
          labelLine: {
            show: true,
          },
        },
        itemStyle: {
          color: function (params: any) {
            const colorList = [
              {
                c1: ' #45EAFF',
                c2: '#40ADAC',
              },
              {
                c1: '#12B3F8',
                c2: '#7DE8FF',
              },
              {
                c1: ' #0176D3',
                c2: '#13B7FF',
              },
              {
                c1: '#015BD3',
                c2: '#138DFF',
              },
            ]
            return {
              type: 'linear',
              x: 1,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [
                { offset: 0, color: colorList[params.dataIndex].c1 },
                { offset: 1, color: colorList[params.dataIndex].c2 },
              ],
            }
          },
        },
        labelLine: {
          show: true,
          length: 40,
          length2: 90,
          color: '#46d6ff',
          lineStyle: {
            type: 'dashed',
            width: 2,
          },
        },

        data: data,
      },
    ],
  }

  return option
}
