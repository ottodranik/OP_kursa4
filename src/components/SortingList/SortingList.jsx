import React from 'react'
import SortLink from '../../containers/SortLink'
import styles from './SortingList.css'

const SortingList = () => (	
	<div className={styles.sortList}>
		<SortLink value="name" type="sort">Name</SortLink>
		<SortLink value="stars_count" type="sort">Stars count</SortLink>
		<SortLink value="issue_count" type="sort">Issue count</SortLink>
		<SortLink value="date" type="sort">Date</SortLink>
		<span>|</span>
		<SortLink value="asc" type="order">ACS</SortLink>
		<SortLink value="desc" type="order">DESC</SortLink> 
	</div>
)

export default SortingList