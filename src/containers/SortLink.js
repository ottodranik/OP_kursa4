import React from 'react'
import { connect } from 'react-redux'
// import { setSort } from '../actions'
import { Link } from 'react-router-dom'
// import Sort from './components/Sort'
import { withRouter } from 'react-router'
import { stringify, parse } from 'qs'

const DEFAULT = {
	sort: 'date',
	order: 'desc'
}

const renderSortOrder = (sorting, disabled, text, onClick) => {
	if(disabled) {
		return <span>{text}</span>
	}
	return(
		<a href="#" onClick={e => {
				e.preventDefault();
				onClick()
			}}>
			{text}
		</a>
	)
}

const renderSort = (sort, order, disabled, text, location) => {
	if(disabled) {
		return <span>{text}</span>
	}
	let query = Object.assign({}, location.query)
	let link = ''
	if(!location.search) {
		link = '?sort='+sort+'&order='+order;
	} else {
		query.sort = sort;
		query.order = order
		link = '?'+stringify(query);
	}
	
	return(
		<Link to={link}>
			{text}
		</Link>
	)
}

const Sort = ({ sortValue, sortType, disabled, text, location }) => {
	// console.log(location)
	const sort = sortType === 'sort' ? sortValue || location.query.sort : location.query.sort || DEFAULT.sort
	const order = sortType === 'order' ? sortValue || location.query.order : location.query.order || DEFAULT.order
	return (
		<span>
			{renderSort(sort, order, disabled, text, location)}
		</span>
	)
}

const mapStateToProps = (state, ownProps) => ({
	disabled: ownProps.value === ownProps.location.query[ownProps.type],
	sortType: ownProps.type,
	sortValue: ownProps.value,
	text: ownProps.value
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	// onClick: () => {
	// 	dispatch(setSort(ownProps.sorting, ownProps.sortkey))
	// } 
})

const SortLink = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(Sort))

export default SortLink