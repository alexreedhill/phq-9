import React from 'react'

import Score from 'components/Score'

const Results = ({ currentScore, maxScore }) => (
  <div className="results">
    <Score currentScore={ currentScore } maxScore={ maxScore }/>
  </div>
)

export default Results
