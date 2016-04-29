import React from 'react'
import { shallow } from 'enzyme'

import Results from 'components/Results'
import Score from 'components/Score'
import ThankYou from 'components/ThankYou'
import TherapistContactForm from 'components/TherapistContactForm'

function setup(opts = {}) {
  const props = {
    currentScore: opts.currentScore,
    maxScore: 20,
    therapists: { submitted: opts.submitted, entities: [] },
    onTherapistClick: sinon.spy(),
    onTherapistSubmit: sinon.spy(),
  }
  const component = shallow(<Results { ...props } />)

  return {
    props,
    component
  }
}

describe('(Component) Results', () => {
  context('below moderate depression', () =>{
    it('renders a Score component with currentScore and maxScore', () => {
      const { component } = setup({ currentScore: 9 })

      const score = component.find(Score)

      expect(score.props()).to.deep.equal({ currentScore: 9, maxScore: 20})
    })

    it('renders a ThankYou', () => {
      const { component } = setup({ currentScore: 9 })

      const thankYou = component.find(ThankYou)

      expect(thankYou).to.exist
    })

    it('does not render a TherapistContactForm', () => {
      const { component } = setup({ currentScore: 9 })

      const therapistContactForm = component.find(TherapistContactForm)

      expect(therapistContactForm).not.to.exist
    })
  })

  context('moderate depression or greater', () =>{
    it('renders a TherapistContactForm', () => {
      const { props, component } = setup({ currentScore: 10 })

      const therapistContactForm = component.find(TherapistContactForm)

      expect(therapistContactForm.props()).to.deep.equal(
        {
          therapists: props.therapists,
          onTherapistClick: props.onTherapistClick,
          onTherapistSubmit: props.onTherapistSubmit
        }
      )
    })

    it('does not render a ThankYou initially', () => {
      const { component } = setup({ currentScore: 10 })

      const thankYou = component.find(ThankYou)

      expect(thankYou).not.to.exist
    })

    it('renders a ThankYou once the therapist has been submitted', () => {
      const { component } = setup({ currentScore: 10, submitted: true })

      const thankYou = component.find(ThankYou)

      expect(thankYou).to.exist
    })

    it('hides TherapistContactForm once the therapist has been submitted', () => {
      const { component } = setup({ currentScore: 10, submitted: true })

      const therapistContactForm = component.find(TherapistContactForm)

      expect(therapistContactForm).not.to.exist
    })
  })
})
