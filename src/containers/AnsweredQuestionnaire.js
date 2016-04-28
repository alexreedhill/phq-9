import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Questionnaire from 'components/Questionnaire'
import { selectAnswer } from '../actions/questionnaire'

const mapStateToProps = ({ questionnaire }) => {
  return questionnaire
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerClick: (questionId, answerId) => {
      dispatch(selectAnswer(questionId, answerId))
    },
    onSubmit: () => {
      dispatch(push('/results'))
    }
  }
}

const AnsweredQuestionnaire = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questionnaire)

export default AnsweredQuestionnaire
