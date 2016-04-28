import React from 'react'
// This library is helpful for testing stateless components
import { mount } from 'enzyme'

import Answer from 'components/Answer'

function setup() {
  let props = {
    text: 'answer 1',
    id: 1,
    questionId: 2,
    onAnswerClick: sinon.spy(),
    selected: true
  }
  let wrapper = mount(<Answer { ...props }/>);

  return {
    wrapper,
    props
  }
}

describe('Answer', () => {
  it('renders the answer text', () => {
    const { wrapper } = setup()

    expect(wrapper.find('li').text()).to.equal('answer 1')
  })

  it('uses the id as a value', () => {
    const { wrapper, props } = setup()

    expect(wrapper.find('li')).to.have.attr('value', '1')
  })

  it('calls onAnswerClick when clicked with value', () => {
    const { wrapper, props } = setup()

    wrapper.find('li').simulate('click')

    expect(props.onAnswerClick.calledWith(props.questionId, props.id)).to.be.true
  })
})
