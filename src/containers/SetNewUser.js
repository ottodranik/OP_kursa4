import React from 'react'
import { connect } from 'react-redux'
// import { getUserPeros } from '../actions'
import styles from './userForm.css'

const SetNewUser = ({ history }) => {
	let input
	
	return (
		<div className={styles.userForm}>
			<form onSubmit={e => {
				e.preventDefault()
				if(!input.value.trim()) {
					return
				}
				history.push('/'+input.value)
				input.value = ''
			}}>
				<input className={styles.userInput} ref={node => {
					input = node
				}} />
				<button className={styles.userBtn} type="submit">
					Start
				</button>
			</form>
		</div>
	)
}

export default connect()(SetNewUser)