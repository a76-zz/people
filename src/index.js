import React from 'react';
import Root from './components/Root';
import { render } from 'react-dom';

import initStore from './store';

import './reset.css'
import './index.css'

const store = initStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
