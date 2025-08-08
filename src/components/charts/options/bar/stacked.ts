// data = {
//       xAxis: ['专科', '本科', '硕士研究生', '博士研究生'],
//       yAxis: [
//         { name: '与朋友/家人倾诉', data: [26, 31, 28, 29] },
//         { name: '运动或兴趣爰好', data: [12, 23, 23, 22] },
//         { name: '寻求心理咨询', data: [14, 13, 19, 19] },
//         { name: '自我调节', data: [19, 18, 13, 15] },
//         { name: '其他', data: [29, 14, 17, 14] },
//       ],
//     }

const colors = [
  {
    start: 'rgba(0, 173, 255, 1)', // 科技蓝起点
    end: 'rgba(0, 173, 255, 0.1)', // 科技蓝终点（透明）
  },

  {
    start: 'rgba(142, 93, 255, 1)', // 紫色科技感起点
    end: 'rgba(142, 93, 255, 0.1)',
  },
  {
    start: 'rgba(0, 255, 213, 1)', // 青绿色霓虹起点
    end: 'rgba(0, 255, 213, 0.1)',
  },
  {
    start: 'rgba(255, 87, 34, 1)', // 橘红色科技感起点
    end: 'rgba(255, 87, 34, 0.1)',
  },
  {
    start: 'rgba(255, 193, 7, 1)', // 金色科技感起点
    end: 'rgba(255, 193, 7, 0.1)',
  },
  {
    start: 'rgba(68,189,228, 1)', // 亮蓝青起点
    end: 'rgba(68,189,228, 0.1)',
  },
  {
    start: 'rgba(103, 58, 183, 1)', // 深紫科技起点
    end: 'rgba(103, 58, 183, 0.1)',
  },
  {
    start: 'rgba(0, 193, 131, 1)', // 宝石绿科技起点
    end: 'rgba(0, 193, 131, 0.1)',
  },
  {
    start: 'rgba(255, 235, 59, 1)', // 明黄色科技起点
    end: 'rgba(255, 235, 59, 0.1)',
  },
]

export default function stackedOption(data: any) {
  const xData = data?.xAxis
  const series: any = []
  const legendData: any = []
  if (data?.yAxis) {
    data?.yAxis.forEach((el: any, index: any) => {
      legendData.push(el.name)
      series.push({
        name: el.name,
        data: el.data,
        type: 'bar',
        stack: 'one',
        barWidth: 10,
        itemStyle: {
          borderWidth: 10,
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: colors[index % colors.length].start, // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: colors[index % colors.length].end, // 100% 处的颜色
                },
              ],
              global: false, // 缺省为 false
            },
          },
        },
        label: {
          show: true,

          fontSize: 10,
          position: 'right',
          formatter: '{c}%',
        },
      })
    })
  }

  const option = {
    backgroundColor: '',
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     // 坐标轴指示器，坐标轴触发有效
    //     type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
    //   },
    // },

    legend: {
      top: '10px',
      data: legendData,
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        margin: 20,
        fontSize: 10,
        interval: 0,
        rotate: xData.length >= 10 ? 40 : 0,
      },

      data: xData || [],
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series,
  }

  return option
}
