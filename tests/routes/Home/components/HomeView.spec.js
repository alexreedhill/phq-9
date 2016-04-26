import React from 'react';

import { HomeView } from 'routes/Home/components/HomeView';
import Questionnaire from 'components/Questionnaire';
import { shallow } from 'enzyme';

describe('HomeView', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<HomeView />);
  })

  it('Renders a Questionnaire', () => {
    const questionnaire = _component.find(Questionnaire);

    expect(questionnaire).to.exist;
  });
});
