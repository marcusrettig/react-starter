const INCREMENT = '[Counter] Increment';
const DECREMENT = '[Counter] Decrement';

export default function reducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
