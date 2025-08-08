export default function nightingaleOption(data: any, legendShow: boolean = true) {
  let series: any = []
  if (data && data.length) {
    series = [
      {
        type: 'pie',
        radius: [30, 90],
        roseType: 'radius',
        data: data,
      },
    ]
  }

  const option = {
    backgroundColor: '',
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    legend: {
      show: legendShow,
      top: 'top',
    },
    calculable: true,
    label: {
      alignTo: 'edge',
      formatter: '{name|{b}}\n{time|{c}}',
      rich: {
        name: {
          color: 'inherit',
        },
        time: {
          align: 'center',
          padding: 4,
          fontSize: 12,
        },
      },
    },
    series: series,
  }

  return option
}
