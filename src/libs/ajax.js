/**
 * Ajax lib based Axios
 * @author zhaoyiming
 * @since  2019/12/28
 */

import axios from 'axios'

class Ajax {
  constructor() {
    this.queue = {}
  }

  getInsideConfig() {
    const config = {
      headers: {
        'Accept': 'application/json'
      }
    }
    return config
  }

  destroy(url) {
    delete this.queue[url]
  }

  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })

    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const {code, message, data} = res.data
      if (code !== 0) {
        return Promise.reject(message)
      }
      return Promise.resolve(data)
    }, error => {
      this.destroy(url)
      return Promise.reject(error)
    })
  }

  request(options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default new Ajax()
