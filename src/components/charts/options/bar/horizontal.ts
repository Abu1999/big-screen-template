// const lineData = {
//   xAxis: ['非常了解', '基本了解', '不太了解', '完全不了解'],
//   yAxis: [
//     { name: '男', data: [152, 78, 63, 63] },
//     { name: '女', data: [152, 78, 63, 63] },
//   ],
// }
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

export default function horizontalOption(data: any) {
  const yAxisData = data.xAxis || []
  const series: any = []
  if (data.yAxis) {
    data.yAxis.forEach((item: any, index: number) => {
      series.push({
        name: item.name,
        type: 'bar',
        zlevel: 1,
        label: {
          //数据显示的位置
          show: true, //数值是否显示
          position: 'right', //数值相对于柱状图显示的位置
          textStyle: {
            fontSize: 12, // 标签字体大小
          },
        },
        itemStyle: {
          normal: {
            barBorderRadius: [10, 10, 10, 10],
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: colors[index].end }, // 0% 处的颜色
                { offset: 1, color: colors[index].start }, // 100% 处的颜色
              ],
              global: false,
            },
          },
        },
        barWidth: 13,
        emphasis: {
          disabled: true,
          focus: 'none',
        },
        data: item.data,
      })
    })
  }
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '0',
      top: '8%',
      containLabel: true,
    },
    legend: {
      show: true,
      top: '3%',
      right: 20,
      icon: 'rect',
      itemGap: 20,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 12,
      },
    },
    xAxis: {
      show: false,
      type: 'value',
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        axisLabel: {
          formatter: (name: any) => {
            return '{a|' + name + '}'
          },
          rich: {
            a: {
              borderRadius: 12,
              padding: 5,
              align: 'center',
              width: 90,
              height: 18,
              lineHeight: 22,
              fontSize: 14,
            },
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        data: yAxisData,
      },
    ],
    series,
  }

  return option
}
