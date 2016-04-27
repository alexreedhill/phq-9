import { selectAnswer } from 'actions/questionnaire'
import * as types from 'constants/questionnaire'

describe('(Action) Quentionnaire', () => {
  it('selects an answer for a given question', () => {
    const questionId = 1
    const answerId = 2

    const expectedAction = {
      type: types.SELECT_ANSWER,
      questionId,
      answerId
    }

    expect(selectAnswer(questionId, answerId)).to.deep.equal(expectedAction)
  })
})
