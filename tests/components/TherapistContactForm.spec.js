import { shallow } from 'enzyme'
import React from 'react'

import SubmitButton from 'components/SubmitButton'
import TherapistContactForm from 'components/TherapistContactForm'
import Therapist from 'components/Therapist'

describe('(Component) TherapistContactForm', () => {
  function setup() {
    const props = {
      therapists: {
        entities: [
          { name: "John Doe", selected: false },
          { name: "Jane Smith", selected: false },
          { name: "King Tut", selected: false }
        ],
        submitted: false
      },
      onTherapistClick: sinon.spy(),
      onSubmit: sinon.spy()
    }
    const component = shallow(<TherapistContactForm { ...props } />)

    return {
      props,
      component
    }
  }

  it('renders a list of Therapists', () => {
    const { props, component } = setup()

    const therapists = component.find(Therapist)
    const therapistNames = props.therapists.entities.map(therapist => therapist.name)

    expect(therapists.map(therapist => therapist.props().name)).to.deep.equal(therapistNames)
    expect(therapists.first().props()).to.deep.equal(
      { name: 'John Doe', selected: false, onTherapistClick: props.onTherapistClick }
    )
  })

  it('renders a submit button', () => {
    const { props, component } = setup()

    const submitButton = component.find(SubmitButton)

    expect(submitButton.props().onTherapistSubmit).to.equal(props.onTherapistSubmit)
  })
})
