import { shallow } from 'enzyme'
import React from 'react'

import Therapist from 'components/therapist'

function setup(opts = {}) {
  const props = {
    name: 'Alex Hill',
    selected: opts.selected,
    onTherapistClick: sinon.spy()
  }
  const component = shallow(<Therapist { ...props } />)

  return {
    props,
    component
  }
}

describe('(Component) Therapist', () => {
  it("displays the therapist's name", () => {
    const { props, component } = setup()

    expect(component.text()).to.equal(props.name)
  })

  it('does not have a selected class if not selected', () => {
    const { component } = setup({ selected: false })

    expect(component).not.to.have.className('selected')
  })

  it('has a selected class if selected', () => {
    const { component } = setup({ selected: true })

    expect(component).to.have.className('selected')
  })

  it('calls onTherapistClick on click', () => {
    const { props, component } = setup({ selected: false })

    component.simulate('click')

    expect(props.onTherapistClick.calledWith(props.name)).to.be.true
  })
})
