import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import questionnaire from 'reducers/questionnaire'
import therapists from 'reducers/therapists'

// Here we combine all of our reducers
export const reducers = (asyncReducers) => {
  return combineReducers({
    questionnaire,
    therapists,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
