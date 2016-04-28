import React from 'react'
import { Provider } from 'react-redux'
import { mount, shallow } from 'enzyme'

import createStore from 'store/createStore'
import Questionnaire from 'components/Questionnaire'
import Score from 'components/Score'
import AnsweredQuestionnaire from 'containers/AnsweredQuestionnaire'

function setup() {
  const store = createStore({
    questionnaire: {
      questions: [{ id: 0 }, { id: 1 }],
      answers: [{ id: 0 }, { id: 1 }, { id: 2 }],
      questionAnswers: {
        0: 1,
        1: 2
      }
    }
  })
  const wrapper = mount(
    <Provider store={store}>
      <AnsweredQuestionnaire />
    </Provider>
  )
  const component = wrapper.find(Questionnaire)

  return {
    store,
    component,
    wrapper
  }
}

describe('(Container) AnsweredQuestionnaire', () => {
  it('selects an answer on click', () => {
    const { store, component, wrapper } = setup()

    component.props().onAnswerClick(0, 0)

    expect(store.getState().questionnaire.questionAnswers).to.deep.equal({ 0: 0, 1: 2 })
  })

  it('passes the current score to the score component', () => {
    const { wrapper } = setup()

    const score = wrapper.find(Score)

    expect(score.props().currentScore).to.equal(3)
  })

  it('passes the max score to the score component', () => {
    const { wrapper } = setup()

    const score = wrapper.find(Score)

    expect(score.props().maxScore).to.equal(4)
  })
})
