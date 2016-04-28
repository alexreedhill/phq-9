import React from 'react'
// This library is helpful for testing stateless components
import { shallow } from 'enzyme'

import Answer from 'components/Answer'

function setup(opts = {}) {
  let props = {
    text: 'answer 1',
    id: 1,
    questionId: 2,
    onAnswerClick: sinon.spy(),
    selected: opts.selected || false
  }
  let component = shallow(<Answer { ...props } />);

  return {
    component,
    props
  }
}

describe('Answer', () => {
  it('renders the answer text', () => {
    const { component } = setup()

    expect(component.text()).to.equal('answer 1')
  })

  it('uses the id as a value', () => {
    const { component, props } = setup()

    expect(component).to.have.attr('value', '1')
  })

  it('calls onAnswerClick when clicked with value', () => {
    const { component, props } = setup()

    component.simulate('click')

    expect(props.onAnswerClick.calledWith(props.questionId, props.id)).to.be.true
  })

  it('className is selected if selected', () => {
    const { component } = setup({ selected: true })

    expect(component).to.have.className('selected')
  });

  it('className is not selected if not selected', () => {
    let { component } = setup()

    expect(component).not.to.have.className('selected')
  });
})
