import React from 'react'
import { Provider } from 'react-redux'
import App from '../App'
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'

const history = qhistory(
  createBrowserHistory(),
  stringify,
  parse
)

const Root = ({ store }) => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<App />
			</Router>
		</Provider>
	)
}

export default Root
