import React from 'react'

import AnswerList from 'components/AnswerList'
import Question from 'components/Question'
import Score from 'components/Score'
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
                        questionId={ question.id }
                        selectedAnswer={ questionAnswers[question.id] }
                        onAnswerClick={ onAnswerClick } />
          </li>
        )
      }
    </ul>
    <SubmitButton onSubmit={ onSubmit } />
  </div>
)

export default Questionnaire
