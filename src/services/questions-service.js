import api from './api-service'

const findQuestions = () => {
  return api().get('questions/answer')
}

export { findQuestions }
