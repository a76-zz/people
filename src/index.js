import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'

import { createStore } from 'redux'
import reducer from './reducers'

import './reset.css'
import './index.css'

const store = createStore(reducer)

render(
  <Root store={store} />,
  document.getElementById('root')
);
