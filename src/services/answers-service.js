import api from './api-service'

const create = (answer) => {
  return api().post('answers', answer)
}

const findOne = (id) => {
  return api().get('answers/' + id)
}

export { create, findOne }
