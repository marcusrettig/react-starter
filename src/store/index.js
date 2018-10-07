import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter from './counter';

export default function configureStore() {
  const rootReducer = combineReducers({
    counter,
  });

  let store;

  if (process.env.NODE_ENV === 'production') {
    store = createStore(rootReducer);
  } else {
    store = createStore(rootReducer, composeWithDevTools());
  }

  return store;
}
