import React from 'react'
import { connect } from 'react-redux'

import Results from 'components/Results'
import { selectTherapist, submitTherapist } from 'actions/therapists'

const mapStateToProps = ({ questionnaire, therapists }) => {
  return {
    currentScore: Object.values(questionnaire.questionAnswers).reduce((x, y) => x + y),
    maxScore: (questionnaire.answers.length - 1) * questionnaire.questions.length,
    therapists: therapists,
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onTherapistClick: (name) => {
      dispatch(selectTherapist(name))
    },
    onTherapistSubmit: () => {
      dispatch(submitTherapist())
    },
  }
}

const QuestionnaireResults = connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)

export default QuestionnaireResults
