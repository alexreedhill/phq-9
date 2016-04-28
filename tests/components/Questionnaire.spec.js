import React from 'react'
import { shallow } from 'enzyme'

import AnswerList from 'components/AnswerList'
import Score from 'components/Score'
import Question from 'components/Question'
import Questionnaire from 'components/Questionnaire'

function setup() {
  let props = {
    questions: [
      { id: 0, text: "question 1" },
      { id: 1, text: "question 2" }
    ],
    answers: [
      { id: 0, text: 'answer 1'},
      { id: 1, text: 'answer 2'},
      { id: 2, text: 'answer 3'}
    ],
    questionAnswers: {
      0: null,
      1: null
    },
    onAnswerClick: sinon.spy(),
    currentScore: 0,
    maxScore: 4
  }
  let component = shallow(<Questionnaire { ...props } />)

  return {
    props,
    component
  }
}

describe('Questionnaire', () => {
  it('renders a list of Questions', () => {
    const { props, component } = setup()

    const questionComponents = component.find(Question)

    expect(questionComponents.length).to.equal(2)
    expect(questionComponents.first().props()).to.deep.equal(props.questions[0])
  })

  it('renders an AnswerList for each question', () => {
    const { props, component } = setup()

    const answerListComponents = component.find(AnswerList)

    expect(answerListComponents.length).to.equal(2)
    expect(answerListComponents.first().props()).to.deep.equal({
      answers: props.answers,
      questionId: 0,
      selectedAnswer: null,
      onAnswerClick: props.onAnswerClick}
    )
  })

  it('renders a score', () => {
    const { component } = setup()

    const scoreComponent = component.find(Score)

    expect(scoreComponent).to.exist
  });
})
