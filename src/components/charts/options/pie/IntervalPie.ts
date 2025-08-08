const color = [
  {
    start: 'rgba(0, 173, 255, 1)', // 科技蓝起点
    end: 'rgba(0, 173, 255, 0.5)', // 科技蓝终点（透明）
  },

  {
    start: 'rgba(142, 93, 255, 1)', // 紫色科技感起点
    end: 'rgba(142, 93, 255, 0.5)',
  },
  {
    start: 'rgba(0, 255, 213, 1)', // 青绿色霓虹起点
    end: 'rgba(0, 255, 213, 0.5)',
  },
  {
    start: 'rgba(255, 87, 34, 1)', // 橘红色科技感起点
    end: 'rgba(255, 87, 34, 0.5)',
  },
  {
    start: 'rgba(255, 193, 7, 1)', // 金色科技感起点
    end: 'rgba(255, 193, 7, 0.5)',
  },
  {
    start: 'rgba(68,189,228, 1)', // 亮蓝青起点
    end: 'rgba(68,189,228, 0.5)',
  },
  {
    start: 'rgba(103, 58, 183, 1)', // 深紫科技起点
    end: 'rgba(103, 58, 183, 0.5)',
  },
  {
    start: 'rgba(0, 193, 131, 1)', // 宝石绿科技起点
    end: 'rgba(0, 193, 131, 0.5)',
  },
  {
    start: 'rgba(255, 235, 59, 1)', // 明黄色科技起点
    end: 'rgba(255, 235, 59, 0.5)',
  },
]

function intervalPie(pieData: any) {
  const total = pieData.reduce((pre: any, next: any) => {
    return pre.name + next.value
  }, 0)
  const numberWidth = String(total).length * 8 + 10
  // const count = pieData.reduce((acc: number, item: any) => {
  //   return item.value !== 0 ? acc + 1 : acc
  // }, 0)
  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        if (params.value === 0 || !params.name) return '' // 排除无效项
        return `${params.name}<br/>${params.value} `
      },
    },
    legend: {
      show: true,
      orient: 'vertical',
      top: 'center',
      right: '5%',
      icon: 'rect',
      itemGap: 20,
      itemWidth: 15,
      itemHeight: 10,
      color: '#fff',
      formatter: function (name: string) {
        const items = pieData.find((item: any) => item.name == name)
        return `{name|${name}}  {number| ${items?.value || '0'}人}`
      },
      itemStyle: {
        borderWidth: 1,
      },
      textStyle: {
        rich: {
          number: {
            width: numberWidth,
            color: '#DDF6FD',
            align: 'left',
            fontSize: 12,
            fontWeight: 'bold',
            padding: [0, 0, 0, 20],
          },
          name: {
            width: 70,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 14,
            fontWeight: 400,
            fontFamily: 'Source Han Sans CN',
            padding: [0, 0, 0, 2],
          },
        },
      },
    },
    title: [
      {
        text: '',
        left: '28%',
        top: '43%',
        itemGap: 10,
        textAlign: 'center',
        textStyle: {
          rich: {
            title: {
              color: '#485373',
              fontSize: 12,
              fontWeight: 400,
              padding: [8, 0, 0, 0],
            },
            num: {
              fontSize: 18,
              color: '#49F1F2',
              fontFamily: 'DIN Alternate',
              fontWeight: 'bold',
            },
          },
        },
      },
    ],

    series: [
      {
        type: 'pie',
        radius: ['35%', '55%'],
        center: ['30%', '50%'],
        padAngle: 0,
        label: {
          show: false,
        },
        hoverAnimation: true,
        itemStyle: {
          // shadowColor: 'rgba(255, 255, 255, 0.5)',
          // shadowBlur: 2,
          borderWidth: 1,
          borderColor: {
            type: 'linear', // 使用线性渐变
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(255, 255, 255, 0)' }, // 起始颜色
              { offset: 1, color: 'rgba(0, 0, 0, 1)' }, // 结束颜色
            ],
          },
          opacity: 1,
          color: function (params: any) {
            // 为每个扇区设置不同的渐变色
            return {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                { offset: 0, color: color[params.dataIndex % color.length].start },
                { offset: 1, color: color[params.dataIndex % color.length].end },
              ],
            }
          },
        },
        emphasis: {
          scale: false,
        },
        data: pieData,
      },

      {
        name: '黄线',
        type: 'pie',
        startAngle: 85,
        radius: ['25%', '27%'],
        center: ['30%', '50%'],
        hoverAnimation: false,
        //  startAngle: 90,
        padAngle: 5,
        tooltip: {
          // show: false,
        },
        itemStyle: {
          borderCap: 'round',
          normal: {
            color: function (data: any) {
              const tempColor = data.data == 10 ? '#000000  ' : '#1884EC'
              return tempColor
            },
          },
        },
        zlevel: 4,
        labelLine: {
          show: false,
        },
        data: [10, 50, 10, 50, 10, 50, 10, 50],
      },
    ],
  }

  return option
}

export { intervalPie }
export default intervalPie
