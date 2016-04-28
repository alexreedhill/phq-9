import React from 'react'

// The components in this directory are stateless, functional React components.
// They have no dependency on Redux.
const Answer = ({ id, text, questionId, onAnswerClick, selected }) => (
  <li value={ id } onClick={ onAnswerClick.bind(this, questionId, id) }>
    { text }
  </li>
)

export default Answer
