import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistenceState = loadState();
  const store = createStore(
    reducer,
    applyMiddleware(thunk, logger)
  )
  store.subscribe(() => {
    saveState(store.getState())
  })
  return store;
}

export default configureStore;
