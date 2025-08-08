import Axios from '@/utils/axios'

export const getHomeData = () => {
  return new Promise((resolve, reject) => {
    Axios.get(`/options`)
      .then((res) => {
        if (res && res.code === 200) {
          resolve(res.data)
        }
      })
      .catch((err) => reject(err))
  })
}

export const getListData = () => {
  return new Promise((resolve, reject) => {
    Axios.post(`/response`, {
      page: 1,
      page_size: 10,
    })
      .then((res) => {
        if (res && res.code === 200) {
          resolve(res.data)
        }
      })
      .catch((err) => reject(err))
  })
}
