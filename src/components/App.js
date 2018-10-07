import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as counterActions from '../store/counter';

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
  height: 100%;
`;

const Button = styled.button`
  border: 0;
  background-color: palevioletred;
  color: white;
  padding: 1rem 2rem;
  margin: 0rem 0.5rem;
`;

const App = ({ counter, increment, decrement }) => (
  <Wrapper>
    <Title>Counter value is {counter}</Title>
    <Button onClick={increment}>Increment</Button>
    <Button onClick={decrement}>Decrement</Button>
  </Wrapper>
);

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default connect(
  ({ counter }) => ({
    counter,
  }),
  (dispatch) => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
  }),
)(App);
