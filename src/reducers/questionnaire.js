import { combineReducers } from 'redux'

import * as types from 'constants/questionnaire'

const initialState = {
  questions: [],
  answers: [],
  selectedAnswers: {
    selections: {},
    score: 0
  },
}

export const selectedAnswers = (state, { type, answerId, questionId }) => {
  switch(type) {
    case types.SELECT_ANSWER:
      return {
        selections: Object.assign({}, state.selections, {
          [questionId]: answerId
        }),
        score: state.score + answerId - state.selections[answerId]
      }
    default:
      return state
  }
}

// We can use combineReducers here eventually once we have more
const questionnaire = (state, action) => {
  return {
    ...state,
    selectedAnswers: selectedAnswers(state.selectedAnswers, action)
  }
}

export default questionnaire
