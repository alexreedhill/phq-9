import React from 'react'

import SubmitButton from 'components/SubmitButton'
import Therapist from 'components/Therapist'

const TherapistContactForm = ({ therapists, onTherapistClick, onTherapistSubmit }) => (
  <div className="therapist-contact-form">
    { "We're sorry that you're not feeling well. Please select a therapist and we'll contact them for you." }
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
