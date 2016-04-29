import React from 'react'

import SubmitButton from 'components/SubmitButton'
import Therapist from 'components/Therapist'

const TherapistContactForm = ({ therapists, onTherapistClick, onTherapistSubmit }) => (
  <div className="therapist-contact-form">
    <h4>{ "We're sorry that you're not feeling well. Please select a therapist and we'll contact them for you." }</h4>
    <ul className="therapists">
      {
        therapists.entities.map((therapist, i) =>
          <Therapist key={ i }
                     { ...therapist }
                     onTherapistClick={ onTherapistClick } />
        )
      }
    </ul>
    <SubmitButton onSubmit={ onTherapistSubmit } />
  </div>
)

export default TherapistContactForm
