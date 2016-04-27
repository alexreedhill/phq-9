import * as types from 'constants/questionnaire'

export const selectAnswer = (questionId, answerId)  => {
  return {
    type: types.SELECT_ANSWER,
    questionId,
    answerId
  }
}
