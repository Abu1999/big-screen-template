import { getListData, getHomeData } from '@/api/home'

function fixData(data: any) {
  if (!data) return []
  const newData: any = []
  data.forEach((el: any) => {
    newData.push({ name: el.content, value: el.count || 0 })
  })

  newData.sort((a: any, b: any) => b.value - a.value)
  return newData
}

// 地图热力图
function fixMapData(data: any) {
  if (!data) return {}
  const newData: any = { total: 0, todayTotal: 0, province: [] }
  newData.total = data.total
  newData.todayTotal = data.todayTotal
  newData.province = fixData(data.province)
  return newData
}
function fixListData(data: any) {
  if (!data) return []
  const newData: any = []
  data.forEach((el: any) => {
    newData.push([el?.province, el?.city, el?.school, el?.sex, el?.age])
  })
  return newData
}

function getState() {
  return new Promise((resolve) => {
    const promises = [getHomeData(), getListData()]
    const state: any = {
      data1: undefined,
      data2: undefined,
      data3: undefined,
      data4: undefined,
      data5: undefined,
      data6: undefined,
      data7: undefined,
      data8: undefined,
    }
    Promise.allSettled(promises).then((results) => {
      results.forEach((result: any, index: number) => {
        if (result.status === 'fulfilled') {
          if (result.value && result.value.length) {
            switch (index) {
              case 0:
                state.data1 = fixData(result.value.data1)
                state.data1 = fixData(result.value.data1)
                state.data1 = fixData(result.value.data1)
                state.data1 = fixData(result.value.data1)
                state.data1 = fixData(result.value.data1)
                state.data1 = fixData(result.value.data1)
                state.data1 = fixMapData(result.data1)
                break
              case 1:
                state.list = fixListData(result.value)
              default:
                break
            }
          }
        } else {
          console.error(`失败:`, result.reason)
        }
      })
      resolve(state)
    })
  })
}

export default getState
