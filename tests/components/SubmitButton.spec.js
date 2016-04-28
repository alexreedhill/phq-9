import React from 'react'
import { shallow } from 'enzyme'

import SubmitButton from 'components/SubmitButton'

describe('(Component) SubmitButton', () => {
  it('calls onSubmit on click', () => {
    const onSubmit = sinon.spy()
    const component = shallow(<SubmitButton onSubmit={ onSubmit } />)

    component.simulate('click')

    expect(onSubmit.called).to.be.true
  })
})
