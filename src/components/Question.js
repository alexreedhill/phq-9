import React from 'react'

import AnswerList from 'components/AnswerList'

const Question = ({ text, answers }) => (
  <li>
    <p>{ text }</p>
    <AnswerList answers={ answers } />
  </li>
)

export default Question
