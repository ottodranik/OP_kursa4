import React from 'react'
import SortLink from '../../containers/SortLink'
import styles from '../CardsList/header.css'

const SortingList = () => (	
	<div style={{display: 'inline-block'}}>
		<hr />
		<div>
			<SortLink value="name" type="sort" />{", "}
			<SortLink value="stars_count" type="sort" />{", "}
			<SortLink value="issue_count" type="sort" />{", "}
			<SortLink value="date" type="sort" />
		</div>
		<div>
			<SortLink value="asc" type="order" /> 
			<SortLink value="desc" type="order" /> 
		</div>
	</div>
)

export default SortingList