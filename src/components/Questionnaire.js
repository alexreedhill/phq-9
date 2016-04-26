import React from 'react'

import Question from './Question'

const Questionnaire = ({ questions }) => (
  <ul>
    {
      questions.map(question =>
        <Question { ...question } />
      )
    }
  </ul>
)

export default Questionnaire
