//3d柱状图

export default function bar3dOption(data: any) {
  const { categories = [], series = [] } = data

  // 提取第一个系列的数据作为基准计算最大值
  const baseSeriesData = series[0]?.data || []
  let max1 = 5

  const maxnum1 = Math.max(...baseSeriesData)
  const maxlen1 = Math.pow(10, String(Math.ceil(maxnum1)).length - 2)
  if (maxnum1 >= 5) {
    max1 = Math.ceil(maxnum1 / (10 * maxlen1)) * maxlen1 * 10
  }

  // 计算辅助数据
  const data3 = baseSeriesData.map((_: any, i: any) =>
    series.reduce((sum: any, s: any) => sum + s.data[i], 0),
  )
  const data5 = [...baseSeriesData]

  const option = {
    backgroundColor: '', //背景色
    // tooltip: {
    //   trigger: 'axis',
    //   borderColor: 'rgba(255,255,255,0.3)',
    //   backgroundColor: 'rgba(13,5,30,0.6)',
    //   textStyle: {
    //     color: 'white',
    //   },
    //    confine: true,
    //   borderWidth: 1,
    //   padding: 5,

    // },
    textStyle: {
      color: 'rgba(255, 255, 255, 0.8)',
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      selectedMode: false,
      right: '0%',
      top: '0%',
      textStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
      },
      itemHeight: 10,
      itemWidth: 14,
    },
    grid: {
      containLabel: true,
      left: '10%',
      top: '20%',
      bottom: '0%',
      right: '10%',
    },
    xAxis: {
      type: 'category',
      data: categories,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#B5B5B5',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        margin: 20,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          color: 'rgba(255, 255, 255, 0.8)',
        },
        fontSize: 16,
        fontStyle: 'bold',
      },
    },
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: '#B5B5B5',
          },
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
          textStyle: {
            fontFamily: 'Microsoft YaHei',
            color: 'rgba(255, 255, 255, 0.8)',
          },
          fontSize: 14,
        },
      },
      {
        show: false,
        type: 'value',
        min: 0,
        max: max1,
        interval: max1 / 2,
        splitNumber: 2,
        nameTextStyle: {
          color: '#82AFC6',
          fontSize: 12,
          padding: [0, 0, -8, -100],
        },
        axisLabel: {
          formatter: function (value: any) {
            const num = value
            if (num && num != 'undefined' && num != 'null') {
              let numS = num
              numS = numS.toString()
              numS = numS.replace(/,/gi, '')
              return numS
            } else {
              return num
            }
          },
          color: '#82AFC6',
          textStyle: {
            fontSize: 12,
          },
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#3E5B7D',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: '#102E74',
          },
        },
      },
    ],
    series: [
      ...series.map((s: any, index: number) => ({
        label: {
          show: true,
          color: '#fff',
          fontWeight: 'bold',
          position: 'right',
        },
        type: 'bar',
        name: s.name,
        data: s.data,
        stack: 'zs',
        barMaxWidth: 'auto',
        barWidth: 25,
        itemStyle: {
          color: {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            type: 'linear',
            global: false,
            colorStops:
              index === 0
                ? [
                    { offset: 0, color: ' rgba(27, 126, 242, 1)' },
                    { offset: 1, color: 'rgba(27, 126, 242, 0.5)' },
                  ]
                : [
                    { offset: 0, color: 'rgba(41, 241, 250, 1)' },
                    { offset: 1, color: '#06fbfe' },
                  ],
          },
        },
      })),
      // 底部方块
      {
        data: [1, 1],
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbol: 'diamond',
        symbolOffset: [0, '60%'],
        symbolSize: [25, 20],
        zlevel: 2,
        itemStyle: {
          normal: {
            color: '#1B7EF2',
          },
        },
      },
      {
        data: series[0]?.data,
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [25, 20],
        zlevel: 2,
      },
      {
        data: series[0]?.data,
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [25, 20],
        zlevel: 2,
      },
      {
        data: data5,
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [0, 20],
        zlevel: 2,
      },
      {
        data: data5,
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [25, 20],
        zlevel: 2,
        itemStyle: {
          normal: {
            color: 'rgba(27, 126, 242, 0.8)',
          },
        },
      },
      {
        data: data3,
        type: 'pictorialBar',
        barMaxWidth: '20',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [25, 20],
        zlevel: 2,
        itemStyle: {
          normal: {
            color: 'rgba(80, 255, 250, 1)',
          },
        },
      },
    ],
  }

  return option
}
