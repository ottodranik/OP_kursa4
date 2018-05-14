import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CardsList from '../CardsList'
import SetNewUser from '../../containers/SetNewUser'
import styles from './App.css'

const App = () => (
	<div className={styles.mainContainer}>
		<Switch>
			<Route exact path="/" render={(props) => <SetNewUser {...props} />} />
			<Route path="/:currentUser?" component={CardsList} />
		</Switch>
	</div>
)

export default App