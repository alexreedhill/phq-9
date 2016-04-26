import React from 'react'

import Answer from 'components/Answer'

const AnswerList = ({ answers }) => (
  <ul>
    {
      answers.map(answer =>
        <Answer { ...answer } />
      )
    }
  </ul>
)

export default AnswerList
