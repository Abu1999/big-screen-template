import { getListData, getHomeData } from '@/api/home'

function fixData(data: any) {
  if (!Array.isArray(data) || data.length === 0) return []
  const newData: any[] = []
  data.forEach((el: any) => {
    if (!el) return
    if (typeof el.name !== 'undefined' && typeof el.value !== 'undefined') {
      newData.push({ name: el.name, value: Number(el.value) || 0 })
      return
    }
    if (typeof el.content !== 'undefined') {
      newData.push({ name: el.content, value: Number(el.count) || 0 })
    }
  })

  newData.sort((a: any, b: any) => (Number(b.value) || 0) - (Number(a.value) || 0))
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
  if (Array.isArray(data) && data.length > 0 && Array.isArray(data[0])) return data
  if (!Array.isArray(data) || data.length === 0) return []
  return data.map((el: any) => [el?.province, el?.city, el?.school, el?.sex, el?.age])
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
      list: undefined,
    }
    Promise.allSettled(promises).then((results) => {
      results.forEach((result: any, index: number) => {
        if (result.status === 'fulfilled') {
          switch (index) {
            case 0: {
              const home: any = result.value
              if (home) {
                if (typeof home.data1 !== 'undefined') state.data1 = fixData(home.data1)
                if (typeof home.data2 !== 'undefined') state.data2 = fixData(home.data2)
                if (typeof home.data3 !== 'undefined') state.data3 = fixData(home.data3)
                if (typeof home.data4 !== 'undefined') state.data4 = fixMapData(home.data4)
                if (typeof home.data5 !== 'undefined') state.data5 = fixListData(home.data5)
                if (typeof home.data6 !== 'undefined') state.data6 = fixData(home.data6)
                if (typeof home.data7 !== 'undefined') state.data7 = fixData(home.data7)
                if (typeof home.data8 !== 'undefined') state.data8 = fixData(home.data8)
              }
              break
            }
            case 1: {
              const listResult: any = result.value
              const listData = Array.isArray(listResult) ? listResult : listResult?.list || listResult?.data || []
              state.list = fixListData(listData)
              if (typeof state.data5 === 'undefined') state.data5 = state.list
              break
            }
            default:
              break
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
