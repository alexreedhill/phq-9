import React from 'react'

import AnswerList from 'components/AnswerList'
import Question from 'components/Question'
import SubmitButton from 'components/SubmitButton'

const Questionnaire = ({
  questions, answers, questionAnswers, onAnswerClick, onSubmit
}) => (
  <div className="questionnaire">
    <ul className="questions-list">
      {
        questions.map(question =>
          <li key={ question.id }>
            <Question { ...question } />
            <AnswerList answers={ answers }
                        selectedAnswer={ questionAnswers[question.id] }
                        onAnswerClick={ onAnswerClick.bind(this, question.id) } />
          </li>
        )
      }
    </ul>
    <SubmitButton onSubmit={ onSubmit } />
  </div>
)

export default Questionnaire
