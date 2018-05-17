import React from 'react'
import VisibleReposList from '../../containers/VisibleReposList'
import FiltersListCnt from '../../containers/FiltersList'
import SortingList from '../SortingList'
import styles from './header.css'

const CardsList = () => (
	<div>
		<div className={styles.header}>
			<span className={styles.projectTitle}>PROJECT</span>
			<FiltersListCnt />
		</div>
		<div style={{marginTop: '65px'}}>
			<div>
				<SortingList />
			</div>
			<VisibleReposList />
		</div>
		
	</div>
)

export default CardsList