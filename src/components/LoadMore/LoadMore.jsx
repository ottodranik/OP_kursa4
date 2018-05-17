import React from 'react'
import PropTypes from 'prop-types'
import styles from './LoadMore.css'

const LoadMore = ({ onClick }) => (
	<div style={{ textAlign: 'center' }}>
	<button onClick={onClick} className={styles.loadMore}>
		Load More
	</button>
	</div>
)

LoadMore.PropTypes = {
	onClick: PropTypes.func.isRequired
}


export default LoadMore