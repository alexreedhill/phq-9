import React from 'react'
import { connect } from 'react-redux'

import Results from 'components/Results'

const mapStateToProps = ({ questionnaire }) => {
  return {
    currentScore: Object.values(questionnaire.questionAnswers).reduce((x, y) => x + y),
    maxScore: (questionnaire.answers.length - 1) * questionnaire.questions.length
  }
}

const QuestionnaireResults = connect(mapStateToProps)(Results)

export default QuestionnaireResults
