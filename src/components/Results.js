import React from 'react'

import Score from 'components/Score'
import ThankYou from 'components/ThankYou'
import TherapistContactForm from 'components/TherapistContactForm'

const Results = ({
  currentScore, maxScore, therapists, onTherapistClick, onTherapistSubmit
}) => (
  <div className="results">
    <Score currentScore={ currentScore } maxScore={ maxScore } />
    <p>
      Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.
    </p>
    {
      currentScore < 10 || therapists.submitted ?
        <ThankYou /> :
        <TherapistContactForm therapists={ therapists }
                              onTherapistClick={ onTherapistClick }
                              onTherapistSubmit={ onTherapistSubmit } />
    }
  </div>
)

export default Results
