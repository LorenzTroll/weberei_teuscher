import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/LorenzTroll/wt_mockDatabase/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  export default {
    getFabrics() {
      return apiClient.get('/fabrics')
    },
    getFabric(id) {
        return apiClient.get('/fabrics/' + id)
      }
  }