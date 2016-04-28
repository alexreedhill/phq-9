import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import React from 'react'
import { Router } from 'react-router'
import { createMemoryHistory } from 'react-router'

import createStore from 'store/createStore'
import ResultsView from 'routes/Results/components/ResultsView'
import Questionnaire from 'components/Questionnaire'

function setup() {
  const history = createMemoryHistory('/')
  const store = createStore({
    questionnaire: {
      questions: [{ id: 0 }, { id: 1 }],
      answers: [{ id: 0 }, { id: 1 }, { id: 2 }],
      questionAnswers: {
        0: 1,
        1: 2
      }
    }
  }, history)
  const routes = require('routes/index').default(store)
  const wrapper = mount(
    <Provider store={ store }>
      <Router routes={ routes } history={ history } />
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

  it('submits the questionnaire on click', () => {
    const { store, component, wrapper } = setup()

    component.props().onSubmit()
    wrapper.update()
    const resultsView = wrapper.find(ResultsView)

    expect(resultsView).to.exist
  })
})
