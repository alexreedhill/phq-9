import * as types from 'constants/therapists'

const initialState = {
  therapists: {
    entities: [],
    submitted: false
  },
}

const therapists = (state = initialState, { type, name }) => {
  switch(type) {
    case types.SELECT_THERAPIST:
      // Reducers can't mutate state. Object.assign is your friend.
      return Object.assign({}, state, {
        entities: state.entities.map(therapist => {
          return Object.assign({}, therapist, {
            selected: name === therapist.name
          })
        })
      })
    case types.SUBMIT_THERAPIST:
      return Object.assign({}, state, { submitted: true })
    default:
      return state
  }
}

export default therapists
