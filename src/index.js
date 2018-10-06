import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';

injectGlobal`
  body {
    margin: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
