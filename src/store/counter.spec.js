import reducer, { increment, decrement } from './counter';

describe('increment', () => {
  it('increments state by one', () => {
    const before = 0;
    const action = increment();
    const after = 1;
    expect(reducer(before, action)).toEqual(after);
  });
});

describe('decrement', () => {
  it('increments state by one', () => {
    const before = 1;
    const action = decrement();
    const after = 0;
    expect(reducer(before, action)).toEqual(after);
  });
});
