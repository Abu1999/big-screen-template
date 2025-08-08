const color = ['#41F3F7', '#3057FB', '#ffcb4d']

function defaultOption() {
  return {
    backgroundColor: '',
    xAxis: {
      show: false,
      data: [],
    },
    yAxis: {
      show: false,
    },
    series: [],
    legend: { show: false },
  }
}

export default function sortLine(data: any = {}) {
  const { seriesData = [], xAxis = [] } = data
  if (!Array.isArray(seriesData) || seriesData.length === 0) {
    return defaultOption()
  }
  const xAxisData = xAxis
  const serie = seriesData.map((item: any, index: number) => {
    // const arr = item.data.map((obj) => Object.values(obj))
    return {
      name: item.name,
      type: 'line',
      data: item.data,
      smooth: false,
      symbolSize: 8,
      itemStyle: {
        color: '#fff',
        borderColor: color[index],
        borderWidth: 2,
      },
      lineStyle: {
        color: color[index],
        width: 2,
      },
    }
  })

  const sumByIndex = seriesData[0].data.map((_: any, i: any) =>
    seriesData.reduce((sum: any, item: any) => sum + item.data[i], 0),
  )

  //  对总数进行相加排序
  const combined = xAxis
    .map((category: any, index: number) => ({
      category,
      total: sumByIndex[index],
    }))
    .sort((a: any, b: any) => b.total - a.total)
  console.log(combined, '================')
  const categoryToIndex = new Map(combined.map((item: any, index: any) => [item.category, index]))

  const marker = xAxisData.map((item: any, i: number) => {
    const index = categoryToIndex.get(item) ?? -1
    return {
      xAxis: i,
      label: {
        show: true,
        formatter: `NO ${(index as number) + 1}`,
      },
    }
  })

  const option = {
    backgroundColor: '',
    // color: ['#b2f4f8', '#ffcb4d', '#12fffe'],
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      textStyle: {
        color: '#fff',
      },
      backgroundColor: 'rgba(16, 123, 184, .52)', //设置背景颜色
      confine: true,
    },
    legend: {
      show: true,

      textStyle: {
        // color: "#000",
        fontSize: 14,
      },
      icon: 'circle',
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 35,
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '0%',
      top: '25%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: xAxisData,
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.7)',
            width: 1,
            type: 'solid',
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: 14,
            color: 'rgba(255,255,255,0.7)',
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        nameTextStyle: {
          color: '#000',
        },
        offset: 0,
        axisLabel: {
          color: 'rgba(255,255,255,0.7)',
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.7)',
            width: 1,
            type: 'solid',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.2)',
            type: 'dashed',
          },
        },
      },
    ],
    series: [
      ...serie,
      {
        // name: '大学教育程度',
        type: 'line',
        data: [],
        markLine: {
          symbol: 'none',
          label: {
            show: true,
            color: '#fff',
          },
          lineStyle: {
            show: false,
            color: '#5684F0',
            type: 'dashed',
            width: 0,
            emphasis: {
              color: '#d9def7',
            },
          },
          data: marker,
        },
      },
    ],
  }

  return option
}
