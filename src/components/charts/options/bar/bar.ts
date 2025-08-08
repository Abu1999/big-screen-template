const color = [
  '#1D81D0', // 科技蓝
  '#C04BC0', // 紫罗兰
  '#A5BAD4', // 冷灰蓝
  '#00FFF3', // 青柠蓝
  '#6EFB73', // 荧光绿
  '#FFAA00', // 橙色光晕
  '#0047FF', // 深空蓝
  '#FFFFFF', // 白色高光
]
export default function bar(data: any) {
  if (!data) return
  const { seriesData = [], xAxisData = [] } = data
  const series = seriesData.map((item: any, index: number) => {
    return {
      name: item.name,
      type: 'bar',
      barWidth: 12,
      barGap: 0.8,
      data: item.data,
      itemStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: color[index], // 0% 处的颜色
            },
            {
              offset: 1,
              color: color[index], // 100% 处的颜色
            },
          ],
        },
      },
    }
  })
  const option = {
    backgroundColor: '',
    //你的代码
    tooltip: {
      trigger: 'axis', //触发类型 柱状图
      axisPointer: { type: 'shadow' }, //触发效果 移动上去 背景效果
    },
    legend: {
      show: true,
      right: 30,
      itemWidth: 12,
      itemHeight: 12,
      textStyle: {
        fontSize: 12,
        lineHeight: 12,
        rich: {
          a: {
            verticalAlign: 'middle',
          },
        },
        padding: [0, 0, -2, 0], //[上、右、下、左]
      },
    },
    xAxis: [
      {
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(0,0,0,0.5)',
          },
        },
        axisLabel: {
          color: '#979797',
          fontSize: 12,
        },
        type: 'category',
        data: xAxisData,
      },
    ],
    yAxis: {
      name: '',
      nameTextStyle: {
        color: 'rgba(0,0,0,0.5)',
      },
      type: 'value',
      min: 0,
      axisLine: {
        show: false,
      },
      axisLabel: {
        color: '#979797',
        fontSize: 12,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          // color: '#2b2b2b'
        },
      },
      axisTick: {
        show: false,
      },
    },
    grid: {
      top: 50,
      left: 10,
      right: 10,
      bottom: 0,
      containLabel: true,
    },
    series: series,
  }

  return option
}
