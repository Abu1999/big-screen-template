const colors = [
  {
    start: 'rgba(0, 173, 255, 1)', // 科技蓝起点
    end: 'rgba(0, 173, 255, 0)', // 科技蓝终点（透明）
  },
  {
    start: 'rgba(68,189,228, 1)', // 亮蓝青起点
    end: 'rgba(68,189,228, 0)',
  },
  {
    start: 'rgba(142, 93, 255, 1)', // 紫色科技感起点
    end: 'rgba(142, 93, 255, 0)',
  },
  {
    start: 'rgba(0, 255, 213, 1)', // 青绿色霓虹起点
    end: 'rgba(0, 255, 213, 0)',
  },
  {
    start: 'rgba(255, 87, 34, 1)', // 橘红色科技感起点
    end: 'rgba(255, 87, 34, 0)',
  },
  {
    start: 'rgba(255, 193, 7, 1)', // 金色科技感起点
    end: 'rgba(255, 193, 7, 0)',
  },
  {
    start: 'rgba(103, 58, 183, 1)', // 深紫科技起点
    end: 'rgba(103, 58, 183, 0)',
  },
  {
    start: 'rgba(0, 193, 131, 1)', // 宝石绿科技起点
    end: 'rgba(0, 193, 131, 0)',
  },
  {
    start: 'rgba(255, 235, 59, 1)', // 明黄色科技起点
    end: 'rgba(255, 235, 59, 0)',
  },
]

export default function gradientBar(data: any, direction: any = 'vertical') {
  const { xData = [], seriesData = [], total = [] } = data
  const series = seriesData.map((item: any, index: any) => {
    return {
      name: item.name,
      type: 'bar',
      stack: 'percentage',
      barWidth: '15',
      data: item.data,
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: direction === 'vertical' ? 0 : 1,
            y2: direction === 'vertical' ? 1 : 0,
            colorStops:
              direction === 'vertical'
                ? [
                    {
                      offset: 0,
                      color: colors[index].start, // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: colors[index].end, // 100% 处的颜色
                    },
                  ]
                : [
                    {
                      offset: 0,
                      color: colors[index].end, // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: colors[index].start, // 100% 处的颜色
                    },
                  ],
            global: false, // 缺省为 false
          },
        },
      },
      label: {
        normal: {
          show: true,
          position: direction === 'vertical' ? ['130%', '10%'] : ['50%', '-100%'],
          formatter: function (parms: any) {
            if (parms.value === 0) {
              return ''
            }
            const percentage = total[index] ? ((parms.value / total[index]) * 100).toFixed(2) : 0
            return `${percentage ? percentage + '%' : parms.value}`
          },
        },
      },
    }
  })

  const option = {
    backgroundColor: '',
    legend: {
      show: true,
      itemWidth: 20,
      itemHeight: 10,
      padding: [0, 0],
    },
    tooltip: {
      show: false,
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        textStyle: {
          color: '#fff',
        },
      },
    },
    grid: {
      borderWidth: 0,
      top: '10%',
      bottom: 10,
      left: 0,
      right: 10,
      containLabel: true,
      // textStyle: {
      //   color: '#fff',
      // },
    },
    calculable: true,
    xAxis: [
      {
        type: direction === 'vertical' ? 'category' : 'value',
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,.5)',
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitArea: {
          show: false,
        },
        axisLabel: {
          show: direction === 'vertical' ? true : false,
          interval: 0,
          color: 'rgba(255,255,255,0.7)',
          fontSize: 14,
        },
        data: xData,
      },
    ],
    yAxis: [
      {
        type: direction === 'vertical' ? 'value' : 'category',
        splitLine: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: direction === 'vertical' ? false : true,
          interval: 0,
          color: 'rgba(255,255,255,0.5)',
          fontSize: 14,
        },
        splitArea: {
          show: false,
        },
        data: xData,
      },
    ],
    series: series,
  }
  return option
}
