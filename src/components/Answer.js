import React from 'react'

// The components in this directory are stateless, functional React components. They have no dependency on Redux.
const Answer = ({ id, text, onAnswerClick }) => (
  <li onClick={ onAnswerClick.bind(this, id) }>
    <p>{ text }</p>
  </li>
)

export default Answer
