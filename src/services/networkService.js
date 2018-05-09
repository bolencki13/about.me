class NetworkService {
  form (json = {}, type = 'POST') {
    if (type === 'POST' || type === 'PUT') {
      return new Promise((resolve, reject) => {
        let form = new FormData()
        for (let key in json) {
          let item = json[key]
          if (Array.isArray(item)) {
            item = JSON.stringify(item)
          }
          form.append(key, item)
        }
        resolve(form)
      })
    } else {
      return new Promise((resolve, reject) => {
        resolve(Object.keys(json).map((k) => k + '=' + json[k]).join('&'))
      })
    }
  }

  parseResponse (response) {
    return response.json()
      .then((json) => {
        if (response.status !== 200) {
          let error = new Error(json.message)
          error.status = response.status
          throw error
        } else {
          return json
        }
      })
  }

  request (type = 'GET', url, info) {
    return this.form(info, type)
      .then((data) => {
        if (type === 'POST' || type === 'PUT') {
          return fetch(url, {
            method: type,
            body: data
          })
        } else {
          return fetch(`${url}${data ? `?${data}` : ''}`, {
            method: type
          })
        }
      })
      .then((response) => this.parseResponse(response))
  }

  query (string) {
    let params = {}
    if (!string) return params
    if (!string.includes('?')) return params
    let query = string.split('?')[1]
    if (query.includes('#')) query = query.split('#')[0]
    query.split('&').forEach((item) => {
      params[item.split('=')[0]] = item.split('=')[1]
    })
    return params
  }
}

const networkService = new NetworkService()
export default networkService
