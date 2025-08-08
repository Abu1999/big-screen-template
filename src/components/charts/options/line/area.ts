import * as echarts from 'echarts'

const color = new echarts.graphic.LinearGradient(
  0,
  0,
  0,
  1,
  [
    {
      offset: 0,
      color: 'rgba(88,255,255,0.2)',
    },
    {
      offset: 0.8,
      color: 'rgba(88,255,255,0)',
    },
  ],
  false,
)

export default function areaOption(data: any) {
  const xData = data?.xAxis || []
  const series: any = []
  console.log(data)
  if (data?.yAxis) {
    data?.yAxis.forEach((el: any) => {
      series.push({
        name: el.name,
        type: 'line',
        smooth: true,
        showSymbol: true,
        symbolSize: 8,
        zlevel: 3,
        itemStyle: {
          color: '#19a3df',
          borderColor: '#a3c8d8',
        },
        lineStyle: {
          normal: {
            width: 2,
            color: '#19a3df',
          },
        },
        areaStyle: {
          normal: {
            color,
          },
        },
        data: el.data,
      })
    })
  }

  const option = {
    backgroundColor: '',

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255,255,255,0)', // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: 'rgba(255,255,255,1)', // 100% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(255,255,255,0)', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
      },
    },
      legend: {
      top: '10px',
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          formatter: '{value}',
          fontSize: 14,
          margin: 20,
          textStyle: {
            color: '#7ec7ff',
          },
        },
        axisLine: {
          lineStyle: {
            color: '#243753',
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#243753',
          },
        },
        axisTick: {
          show: false,
        },
        data: xData,
      },
    ],
    yAxis: [
      {
        boundaryGap: false,
        type: 'value',
        axisLabel: {
          textStyle: {
            color: '#7ec7ff',
          },
        },
        nameTextStyle: {
          color: '#fff',
          fontSize: 12,
          lineHeight: 40,
        },
        splitLine: {
          lineStyle: {
            color: '#243753',
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#283352',
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: series,
  }

  return option
}
