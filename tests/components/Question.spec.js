import React from 'react'
import { shallow } from 'enzyme'

import AnswerList from 'components/AnswerList'
import Question from 'components/Question'

function setup() {
  let answers = [{}, {}]
  let props = { text: 'question', id: 1 }
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
})
