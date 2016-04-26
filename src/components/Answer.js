import React from 'react'

const Answer = ({ text, value, onAnswerClick }) => (
  <li onClick={ onAnswerClick.bind(this, value) }>
    <p>{ text }</p>
  </li>
)

export default Answer
