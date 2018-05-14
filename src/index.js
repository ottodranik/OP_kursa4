import React from 'react'
import { render } from 'react-dom'
import configureStore from './configureStore'
import Root from './components/Root'

const store = configureStore();
const rootElement = document.getElementById('root');

render(
  <Root store={store} />,
  rootElement
)