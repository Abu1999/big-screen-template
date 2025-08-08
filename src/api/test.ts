import Axios from '@/utils/axios'

export const getData = () => {
  return new Promise((resolve, reject) => {
    Axios.get('/api/data/test')
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
