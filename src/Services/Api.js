// a library to wrap and simplify api calls
import axios from 'axios'

const serverUrl = 'TODO'

// our "constructor"
const api = axios.create({
  baseURL: `${serverUrl}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const setHeader = (name, value) => {
  if (value) {
    axios.defaults.headers.common[name] = value
  } else {
    delete axios.defaults.headers.common[name]
  }
}

const endpoints = {

  // post

  // put

  // get
  getSomething: () => api.get(`/somethins`),

  // delete

  // helpers
  serverUrl,
  setHeader
}

export default endpoints
