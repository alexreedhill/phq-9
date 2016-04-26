import React from 'react'
import { shallow } from 'enzyme'

import AnswerList from 'components/AnswerList'
import Question from 'components/Question'

function setup() {
  let answers = [{}, {}]
  let props = { text: 'question', answers: answers }
  let component = shallow(<Question { ...props }/>)

  return {
    answers,
    component
  }
}

describe('Question', () => {
  it('renders the text', () => {
    const { component } = setup()

    expect(component.find('p').text()).to.equal('question')
  })

  it('renders the AnswerList', () => {
    const { component, answers } = setup()

    expect(component.find(AnswerList).props().answers).to.equal(answers)
  })
})
