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

export default function multicurveOption(data: any) {
  const xData = data?.xAxis || []
  const series: any = []
  const legendData: any = []

  if (data?.yAxis) {
    data?.yAxis.forEach((el: any, index: any) => {
      legendData.push(el.name)
      series.push({
        name: el.name,
        data: el.data,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1.5,
          },
        },
        areaStyle: {
          normal: {
            color: {
              colorStops: [
                {
                  offset: 0,
                  color: colors[index].start, // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: colors[index].end, // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}',
        },
      })
    })
  }

  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#57617B',
        },
      },
      textStyle: {
        align: 'left',
      },
    },
    grid: {
      top: '28%',
    },
    legend: {
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: legendData,
      right: '4%',
      textStyle: {
        fontSize: 12,
      },
    },

    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#57617B',
          },
        },
        data: xData,
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位（人）',
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#57617B',
          },
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 12,
          },
        },
        splitLine: {
          lineStyle: {
            color: '#57617B',
          },
        },
      },
    ],
    series,
  }

  return option
}
