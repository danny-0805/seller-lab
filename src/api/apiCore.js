import axios from "axios"

// const PROD_API_URL = "https://beta.magento.pixiedia.com/rest/"
const API_URL = ""

const axiosApi = axios.create({
  baseURL: API_URL,
})

export const setAuthHeader = token => {
  if (typeof window !== `undefined`) {
    axiosApi.defaults.headers.common.Authorization =
      `${token}` || `${BrowserDatabase.getItem("token")}`
  }
}

export async function get(url, config = {}) {
  const response = await axiosApi
    .get(url, { ...config })
    .then(res => res.data)
    .catch(error => ({ ...error, hasError: true }))

  return response
}

export async function del(url, config = {}) {
  const response = await axiosApi
    .delete(url, { ...config })
    .then(res => res.data)
    .catch(error => ({ ...error, hasError: true }))

  return response
}

export async function post(url, data, config = {}) {
  const response = axiosApi
    .post(url, { ...data }, { ...config })
    .then(res => res.data)
    .catch(error => ({ error, hasError: true }))

  return response
}

export async function put(url, data, config = {}) {
  const response = axiosApi
    .put(url, { ...data }, { ...config })
    .then(res => res.data)
    .catch(error => ({ error, hasError: true }))

  return response
}
