import * as types from 'constants/therapists'

export const selectTherapist = (name)  => {
  return {
    type: types.SELECT_THERAPIST,
    name,
  }
}

export const submitTherapist = ()  => {
  return {
    type: types.SUBMIT_THERAPIST,
  }
}
