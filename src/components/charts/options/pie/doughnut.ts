const colorList = ['#22D7BB', '#24AAFF', '#5EDDF8', '#FCB840', '#F9D660']

export default function doughnutOption(data: any) {
  const dataChart: any = []
  if (data && data.length) {
    let sum = 0
    data.forEach((item: any) => {
      sum += Number(item.value)
    })
    data.map((item: any, index: any) => {
      if (item.value != 0) {
        dataChart.push(
          {
            value: item.value,
            name: item.name,
            itemStyle: {
              normal: {
                color: colorList[index],
              },
            },
          },
          {
            value: sum / 150,
            itemStyle: {
              normal: {
                color: '#FFFFFF',
              },
            },
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        )
      }
    })
  }

  const option = {
    backgroundColor: '',
    // color: colorList,

    legend: {
      show: false,
      orient: 'vertical',
      top: 'middle',
      right: '5%',
      textStyle: {
        color: '#f2f2f2',
        fontSize: 25,
      },
      icon: 'roundRect',
    },
    series: [
      // 主要展示层的
      {
        radius: ['48%', '60%'],
        center: ['50%', '50%'],
        type: 'pie',
        itemStyle: {
          normal: {
            color: function (params: any) {
              return colorList[params.dataIndex]
            },
          },
        },

        label: {
          show: true,
          position: 'outside',
          formatter: function (params: any) {
            return (
              '{name|' +
              params.name +
              '}\n{value|' +
              params.value +
              '}{lr|(' +
              params.percent +
              '%)}'
            )
          },
          padding: [0, 0],
          rich: {
            name: {
              align: 'left',
              fontSize: 16,
              color: 'inherit',
              padding: [0, 0, 10, 0],
            },
            value: {
              fontSize: 14,
              align: 'left',
            },
            lr: {
              align: 'left',
              fontSize: 14,
            },
          },
        },
        labelLine: {
          normal: {
            length: 10,
            length2: 30,
            lineStyle: {
              width: 1,
            },
          },
        },

        data: dataChart,
      },
    ],
  }

  return option
}
