import React from 'react'
// Shallow rendering helps to ensure that we're not accidentally testing child
// component behavior
import { shallow } from 'enzyme'

import Answer from 'components/Answer'
import AnswerList from 'components/AnswerList'

function setup() {
  let props = {
    answers: [
      { text: 'answer 1', id: 1 },
      { text: 'answer 2', id: 2 }
    ],
    selectedAnswer: 2,
    onAnswerClick: sinon.spy()
  }

  let component = shallow(<AnswerList { ...props } />)

  return {
    component
  }
}

describe('AnswerList', () => {
  it('renders a list of Answers', () => {
    const { component } = setup()
    const answerComponents = component.find(Answer)

    expect(answerComponents.length).to.equal(2)
  })

  it('may have a selected answer', () => {
    const { component } = setup()

    expect(component.find(Answer).first().props().selected).to.be.false
    expect(component.find(Answer).last().props().selected).to.be.true
  });
})
