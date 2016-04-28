import React from 'react'

import Answer from 'components/Answer'

const AnswerList = ({ answers, questionId, selectedAnswer, onAnswerClick }) => (
  <ul>
    {
      answers.map(answer =>
        <Answer { ...answer }
                onAnswerClick={ onAnswerClick }
                selected={ selectedAnswer === answer.id }
                questionId={ questionId }
                key={ answer.id } />
      )
    }
  </ul>
)

export default AnswerList
