import { combineReducers, createStore } from 'redux';
import counter from './counter';

export default function configureStore() {
  const rootReducer = combineReducers({
    counter,
  });
  return createStore(rootReducer);
}
