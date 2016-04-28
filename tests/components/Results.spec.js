import React from 'react'
import { shallow } from 'enzyme'

import Results from 'components/Results'
import Score from 'components/Score'

function setup() {
  const props = {
    currentScore: 10,
    maxScore: 20
  }
  const component = shallow(<Results { ...props } />)

  return {
    component
  }
}

describe('(Component) Results', () => {
  it('renders a Score component with currentScore and maxScore', () => {
    const { component } = setup()
    const score = component.find(Score)

    expect(score.props()).to.deep.equal({ currentScore: 10, maxScore: 20})
  })
})
