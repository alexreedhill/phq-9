import React from 'react';

import { HomeView } from 'routes/Home/components/HomeView';
import AnsweredQuestionnaire from 'containers/AnsweredQuestionnaire';
import { shallow } from 'enzyme';

describe('HomeView', () => {
  let _component;

  beforeEach(() => {
    _component = shallow(<HomeView />);
  })

  it('Renders a Questionnaire', () => {
    const questionnaire = _component.find(AnsweredQuestionnaire);

    expect(questionnaire).to.exist;
  });
});
