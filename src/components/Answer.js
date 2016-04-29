import React from 'react'

// The components in this directory are stateless, functional React components.
// They have no dependency on Redux.
const Answer = ({ id, text, onAnswerClick, selected }) => (
  <li className={ selected ? "selected" : "" }
      onClick={ onAnswerClick.bind(this, id) }>
    { text }
  </li>
)

export default Answer
