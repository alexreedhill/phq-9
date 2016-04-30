import * as types from 'constants/questionnaire'

const initialState = {
  questions: [],
  answers: [],
  questionAnswers: {
  },
}

export const questionAnswers = (state, { type, answerId, questionId }) => {
  switch(type) {
    case types.SELECT_ANSWER:
      return Object.assign({}, state, { [questionId]: answerId })
    default:
      return state
  }
}

const questionnaire = (state = initialState, action) => {
  return Object.assign({}, state, {
    questionAnswers: questionAnswers(state.questionAnswers, action)
  })
}

export default questionnaire
