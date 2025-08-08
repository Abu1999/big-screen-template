// //雷达图


// const defaultData = [
//   {
//     text: '宫颈癌',
//     min: 0,
//     max: 100,
//     value: 80,
//   },
//   {
//     text: '其他皮肤黏膜接触传播',
//     min: 0,
//     max: 100,
//     value: 60,
//   },
//   {
//     text: '生殖器疣',
//     min: 0,
//     max: 100,
//     value: 80,
//   },
//   {
//     text: '肛门癌',
//     min: 0,
//     max: 100,
//     value: 90,
//   },
//   {
//     text: '口咽癌',
//     min: 0,
//     max: 100,
//     value: 88,
//   },
//   {
//     text: '性行为传播',
//     min: 0,
//     max: 100,
//     value: 90,
//   },
//   {
//     text: '母婴传播',
//     min: 0,
//     max: 100,
//     value: 90,
//   },
//   {
//     text: '间接接触传播',
//     min: 0,
//     max: 100,
//     value: 78,
//   },
// ]

const setData = (dataValues: number[]) => {
  return [
    {
      value: dataValues,
      itemStyle: {
        normal: {
          lineStyle: {
            color: '#4BFFFC',
            shadowColor: '#4BFFFC',
            shadowBlur: 5,
          },
          shadowColor: '#4BFFFC',
          shadowBlur: 5,
        },
      },
      areaStyle: {
        normal: {
          // 单项区域填充样式
          color: {
            type: 'linear',
            x: 0, //右
            y: 0, //下
            x2: 1, //左
            y2: 1, //上
            colorStops: [
              {
                offset: 0,
                color: '#4A99FF',
              },
              {
                offset: 0.5,
                color: 'rgba(0,0,0,0)',
              },
              {
                offset: 1,
                color: '#4A99FF',
              },
            ],
            globalCoord: false,
          },
          opacity: 1, // 区域透明度
        },
      },
    },
  ]
}

//周围刻度（最外圈）
function setgauge(i: number) {
  return {
    type: 'gauge',
    detail: false,
    splitNumber: 10, //刻度数量
    radius: '70%', //图表尺寸
    center: ['50%', '50%'],
    startAngle: 90 + 72 * i + 18, //开始刻度的角度
    endAngle: 90 + 72 * (i + 1) - 18, //结束刻度的角度
    axisLine: {
      show: false,
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#66ccff',
        width: 1,
      },
      length: 5,
      splitNumber: 1,
    },
    splitLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
  }
}
function setSpot(dataValues: number[]) {
  const scatterData: any[] = []
  dataValues.map((o, i) => {
    scatterData.push({
      value: [o, i],
      itemStyle: {
        normal: {
          color: '#41E1FF',
          borderColor: '#fff',
          borderWidth: 1,
          shadowColor: '#41E1FF',
          shadowBlur: 4,
        },
      },
    })
  })
  return scatterData
}
function contains(arr: any = [], obj: any) {
  let i = arr.length
  while (i--) {
    if (arr[i].text === obj) {
      return arr[i].value
    }
  }
  return 0
}
export default function leida(indicator: any[] = []) {
  const data = indicator.map((item: any) => {
    return item.value
  })
  const option = {
    backgroundColor: '',
    polar: {
      center: ['50%', '50%'],
      radius: '50%',
    },
    radar: {
      triggerEvent: true,
      shape: 'circle',
      center: ['50%', '50%'],
      radius: '50%',
      indicator: indicator,
      axisName: {
        color: '#b7e9fd',
        fontSize: 13,
        padding: -24,
        rich: {
          b: {
            color: '#41E1FF',
            fontSize: 12,
            padding: [5, 15, 0, 15],
          },
          triggerEvent: true,
        },
        formatter: (a: any) => {
          const i = contains(indicator, a) // 处理对应要显示的样式
          return `{a| ${a ? a : ''}}\n{b| ${i ? i + '%' : ''}}`
        },
      },
      nameGap: 50,
      splitNumber: 4,
      splitArea: {
        // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: true,
        areaStyle: {
          // 分隔区域的样式设置。
          color: ['rgba( 30, 90,153, 0.2)'],
        },
      },
      axisLine: {
        //指向外圈文本的分隔线样式
        lineStyle: {
          color: '#5aa3d0',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(99,192,251,0.2)', // 分隔线颜色
          width: 2, // 分隔线线宽
        },
      },
    },
    angleAxis: {
      type: 'category',
      data: indicator.map((item: any) => {
        return item.name
      }),
      minInterval: 1,
      boundaryGap: false,
      clockwise: false,
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
    },
    radiusAxis: {
      min: 0,
      max: 100,
      interval: 25,
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        //指向外圈文本的分隔线样式
        lineStyle: {
          color: '#5aa3d0',
        },
      },
      axisLabel: {
        fontSize: 12,
        color: '#5aa3d0',
        align: 'left',
        margin: -5,
      },
    },
    series: [
      setgauge(0),
      setgauge(1),
      setgauge(2),
      setgauge(3),
      setgauge(4),
      {
        type: 'radar',
        silent: true,
        lineStyle: {
          color: '#66ffff',
        },
        areaStyle: {
          color: 'rgba(102, 255, 255, 0.31)',
        },
        data: setData(data),
      },
      {
        type: 'scatter',
        coordinateSystem: 'polar',
        symbolSize: 8, //圆点大小
        data: setSpot(data),
      },
    ],
  }

  return option
}
export { leida }
