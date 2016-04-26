import React from 'react'
import { shallow } from 'enzyme'

import Answer from 'components/Answer'
import AnswerList from 'components/AnswerList'

function setup() {
  let answers = [
    { text: 'answer 1', value: 1 },
    { text: 'answer 2', value: 2 }
  ]
  let component = shallow(<AnswerList answers={ answers } />)

  return {
    answers,
    component
  }
}

describe('AnswerList', () => {
  it('renders a list of Answers', () => {
    const { answers, component } = setup()
    const answerComponents = component.find(Answer)

    expect(answerComponents.map( answer => answer.props() )).to.deep.eql(answers)
  })
})
