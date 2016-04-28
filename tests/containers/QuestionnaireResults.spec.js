import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import React from 'react'

import createStore from 'store/createStore'
import QuestionnaireResults from 'containers/QuestionnaireResults'
import Results from 'components/Results'

function setup() {
  const store = createStore({
    questionnaire:{
      questions: [{}, {}, {}],
      answers: [{}, {}, {}],
      questionAnswers: {
        0: null,
        1: 1,
        2: 3
      }
    }
  })

  const wrapper = mount(
    <Provider store={ store }>
      <QuestionnaireResults />
    </Provider>
  )

  const component = wrapper.find(Results)

  return {
    component,
    wrapper
  }
}

describe('(Container) QuestionnaireResults', () => {
  it('calculates currentScore', () => {
    const { component, wrapper } = setup()

    expect(component.props().currentScore).to.equal(4)
  })

  it('calculates maxScore', () => {
    const { component, wrapper } = setup()

    expect(component.props().maxScore).to.equal(6)
  })
})









