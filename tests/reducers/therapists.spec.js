import { selectTherapist, submitTherapist } from 'actions/therapists'
import therapists from 'reducers/therapists'

function setup() {
  return {
    entities: [
      { name: 'John Doe', selected: false },
      { name: 'Sarah Smith', selected: true },
      { name: 'Robert Hill', selected: false },
    ],
    submitted: false
  }
}

describe('(Reducer) Therapists', () => {
  it('selects a therapist', function() {
    const newState = therapists(setup(), selectTherapist('Robert Hill'))

    expect(newState.entities).to.deep.equal([
      { name: 'John Doe', selected: false },
      { name: 'Sarah Smith', selected: false },
      { name: 'Robert Hill', selected: true },
    ])
  })

  it('submits a therapist', function() {
    const newState = therapists(setup(), submitTherapist())

    expect(newState.submitted).to.be.true
  })
})
