import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducer from './store/reducers/reducer'

import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'

const logger = store => next => action => {
  const result = next(action)
  return result
}

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose

const combinedReducers = combineReducers({
  appState: reducer,
})

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(logger, thunk))
)

const AppHandler = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<AppHandler />, document.getElementById('root'))

serviceWorker.unregister()
