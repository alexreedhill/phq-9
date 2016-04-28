import React from 'react'
import { shallow } from 'enzyme'

import Score from 'components/Score'

function setup() {
  let props = { currentScore: 10, maxScore: 20 }
  let component = shallow(<Score { ...props } />)

  return {
    props,
    component
  }
}

describe('(Component) Score', () => {
  it('displays the current score', () => {
    const { props, component } = setup()

    expect(component.text()).to.include('10')
  })

  it('displays the total score', () => {
    const { props, component } = setup()

    expect(component.text()).to.include('20')
  })
})
