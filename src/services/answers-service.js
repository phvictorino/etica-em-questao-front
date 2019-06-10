import api from './api-service'

const create = (answer) => {
  return api.post('answer', answer)
}

export { create }
