import React from 'react'
import VisibleReposList from '../../containers/VisibleReposList'
import FiltersListCnt from '../../containers/FiltersList'
import SortingList from '../SortingList'
import styles from './header.css'

const CardsList = () => (
	<div>
		<div className={styles.header}>
			<FiltersListCnt />
			<SortingList />
		</div>
		<VisibleReposList />
	</div>
)

export default CardsList