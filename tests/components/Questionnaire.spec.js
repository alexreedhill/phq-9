import React from 'react'
import { shallow } from 'enzyme'

import Question from 'components/Question'
import Questionnaire from 'components/Questionnaire'

function setup() {
  let questions = [
    { text: "question 1" },
    { text: "question 2" }
  ]
  let component = shallow(<Questionnaire questions={ questions } />)

  return {
    questions,
    component
  }
}

describe('Questionnaire', () => {
  it('renders a list of Questions', () => {
    const { questions, component } = setup()

    const questionComponents = component.find(Question)

    expect(questionComponents.map( question => question.props() )).to.deep.eql(questions)
  })
})
