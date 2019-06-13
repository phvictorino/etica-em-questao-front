import api from './api-service'

const findStats = () => {
  return api().get('stats')
}

export { findStats }
