import React from 'react'

const Therapist = ({ name, selected, onTherapistClick }) => (
  <li className={ selected ? "selected" : "" } onClick={ onTherapistClick.bind(this, name) }>
    { name }
  </li>
)

export default Therapist
