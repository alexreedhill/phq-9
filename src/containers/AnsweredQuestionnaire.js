import { connect } from 'react-redux'

import Questionnaire from 'components/Questionnaire'
import { selectAnswer } from '../actions/questionnaire'

const mapStateToProps = ({ questionnaire }) => {
  return {
    ...questionnaire,
    currentScore: Object.values(questionnaire.questionAnswers).reduce((x, y) => x + y),
    maxScore: (questionnaire.answers.length - 1) * (questionnaire.questions.length)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerClick: (questionId, answerId) => {
      dispatch(selectAnswer(questionId, answerId))
    }
  }
}

const AnsweredQuestionnaire = connect(
  mapStateToProps,
  mapDispatchToProps
)(Questionnaire)

export default AnsweredQuestionnaire
