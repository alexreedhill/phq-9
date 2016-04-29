import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import React from 'react'

import createStore from 'store/createStore'
import QuestionnaireResults from 'containers/QuestionnaireResults'
import { mapDispatchToProps } from 'containers/QuestionnaireResults'
import Results from 'components/Results'
import { selectTherapist, submitTherapist } from 'actions/therapists'
import Therapist from 'components/Therapist'

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
    },
    therapists: {
      entities: [
        { name: "John Doe", selected: false },
        { name: "Jane Smith", selected: false },
        { name: "King Tut", selected: false }
      ],
      submitted: false
    }
  })

  const wrapper = mount(
    <Provider store={ store }>
      <QuestionnaireResults />
    </Provider>
  )

  const component = wrapper.find(Results)

  return {
    store,
    component
  }
}

describe('(Container) QuestionnaireResults', () => {
  it('calculates currentScore', () => {
    const { component } = setup()

    expect(component.props().currentScore).to.equal(4)
  })

  it('calculates maxScore', () => {
    const { component } = setup()

    expect(component.props().maxScore).to.equal(6)
  })

  it('passes the therapists', () => {
    const { store, component } = setup()

    expect(component.props().therapists).to.equal(store.getState().therapists)
  })

  it('passes the therapist submitted state', () => {
    const { store, component } = setup()

    expect(component.props().therapists.submitted).to.equal(store.getState().therapists.submitted)
  })

  it('selects a therapist on click', () => {
    const dispatch = sinon.spy()
    const dispatchProps = mapDispatchToProps(dispatch)

    dispatchProps.onTherapistClick('Some name')

    expect(dispatch.calledWith(selectTherapist('Some name'))).to.be.true
  })

  it('submits a therapist selection', () => {
    const dispatch = sinon.spy()
    const dispatchProps = mapDispatchToProps(dispatch)

    dispatchProps.onTherapistSubmit()

    expect(dispatch.calledWith(submitTherapist())).to.be.true
  })
})
