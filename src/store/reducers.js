import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import questionnaire from 'reducers/questionnaire'

export const reducers = (asyncReducers) => {
  return combineReducers({
    questionnaire,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
