import { connect } from 'react-redux'
import { showRepoModal, loadMoreRepos } from '../actions'
import ReposList from '../components/ReposList'
import { sortByAlphabet, sortByDate, sortByDigits, compose } from '../libs'
import { withRouter } from 'react-router'
import { getUserPeros } from '../actions'

const getSlicedRepos = (repos, query, loadMore) => {
	return repos.slice(0, loadMore)
}

const getFilteredRepos = (repos, query) => {
	console.log(query)
	let filterRepos = repos.slice(0)
	if(~Object.keys(query).indexOf('has_open_issues')) {
		filterRepos = filterRepos.filter((item) => item.hasOpenIssues)
	}
	if(~Object.keys(query).indexOf('has_topics')) {
		filterRepos = filterRepos.filter((item) => item.hasTopics)
	}
	if(query.starred_gt) {
		filterRepos = filterRepos.filter((item) => item.starsCount >= query.starred_gt)
	}
	if(query.type) {
		switch(query.type) {
			case 'sources': 
				filterRepos = filterRepos.filter((item) => !item.isFork)
				break
			case 'forks':
				filterRepos = filterRepos.filter((item) => item.isFork)
				break
		}
	}
	if(query.language) {
		filterRepos = filterRepos.filter((item) => item.language.toLowerCase() === query.language.toLowerCase() || query.language === 'all')
	}
	if(query.updated_after) {
		filterRepos = filterRepos.filter((item) => new Date(item.lastUpdate) > new Date(query.updated_after))
	}
	return filterRepos;
}

const getSortingRepos = (repos, query) => {
	switch (query.sort) {
		case 'name':
			return (query.order === 'asc') ?
				repos.slice().sort((a, b) => sortByAlphabet(a, b, 'name')) :
				repos.slice().sort((a, b) => sortByAlphabet(b, a, 'name'))
		case 'stars_count':
			return (query.order === 'asc') ?
				repos.slice().sort((a, b) => sortByDigits(a, b, 'starsCount')) :
				repos.slice().sort((a, b) => sortByDigits(b, a, 'starsCount'))
		case 'issue_count':
			return (query.order === 'asc') ?
				repos.slice().sort((a, b) => sortByDigits(a, b, 'issuesCount')) :
				repos.slice().sort((a, b) => sortByDigits(b, a, 'issuesCount'))
		case 'date':
			return (query.order === 'asc') ?
				repos.slice().sort((a, b) => sortByDate(a, b, 'lastUpdate')) :
				repos.slice().sort((a, b) => sortByDate(b, a, 'lastUpdate'))
		default:
			return repos
	}
}

const mapStateToProps = (state, ownProps) => ({
	repos: compose(getFilteredRepos, getSortingRepos, getSlicedRepos)
					(state.repos, ownProps.location.query, state.visibleReposCount),
	allReposLoaded: state.allReposLoaded
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onRepoClick: () => {
		dispatch(showRepoModal())
	},
	onLoadMoreClick: () => {
		dispatch(loadMoreRepos())
	},
	onMount: () => {
		dispatch(getUserPeros(ownProps.match.params.currentUser))
	}
})

const VisibleReposList = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(ReposList))

export default VisibleReposList

