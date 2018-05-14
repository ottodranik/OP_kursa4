import React from 'react'
import PropTypes from 'prop-types'

const LoadMore = ({ onClick }) => (
	<button onClick={onClick}>
		Load More
	</button>
)

LoadMore.PropTypes = {
	onClick: PropTypes.func.isRequired
}


export default LoadMore