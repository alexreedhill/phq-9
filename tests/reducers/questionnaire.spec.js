import { selectAnswer } from 'actions/questionnaire'
import questionnaire from 'reducers/questionnaire'

describe('(Reducer) Questionnaire', () => {
  function setup() {
    // Data is key in Redux
    return {
      questions: [
        {
          id: 0,
          text: 'question 1'
        },
        {
          id: 1,
          text: 'question 2'
        }
      ],
      answers: [
        { id: 0, text: 'answer 1' },
        { id: 1, text: 'answer 2' },
        { id: 2, text: 'answer 3' }
      ],
      selectedAnswers: {
        selections: {
          0: null,
          1: 0
        },
        score: 0
      }
    }
  }

  it('selects an answer', () => {
    const newState = questionnaire(setup(), selectAnswer(0, 0))

    expect(newState.selectedAnswers.selections).to.deep.equal({ 0: 0, 1: 0 })
  });

  it('increments the score', () => {
    const newState = questionnaire(setup(), selectAnswer(0, 1))

    expect(newState.selectedAnswers.score).to.equal(1)
  })
});
