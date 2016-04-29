import { selectTherapist, submitTherapist } from 'actions/therapists'
import * as types from 'constants/therapists'

describe('(Action) Therapists', () => {
  it('selects a therapist', () => {
    const expectedAction = {
      type: types.SELECT_THERAPIST,
      name: 'Sigmund Freud'
    }

    expect(selectTherapist('Sigmund Freud')).to.deep.equal(expectedAction)
  })

  it('submits a therapist', () => {
    const expectedAction = {
      type: types.SUBMIT_THERAPIST,
    }

    expect(submitTherapist()).to.deep.equal(expectedAction)
  })
})
