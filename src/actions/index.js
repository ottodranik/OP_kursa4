import * as api from '../api'

const requestRepos = (userName) => ({
	type: 'FETCH_REPOS_REQUEST',
	userName
})

const requestReposNew = (userName) => ({
	type: 'FETCH_REPOS_REQUEST_NEW',
	userName
})

const receiveRepos = (userName, isNewUser, repos) => ({
	type: 'FETCH_REPOS_RECEIVE',
	userName,
	isNewUser,
	repos
})

const receiveReposNew = (userName, repos) => ({
	type: 'FETCH_REPOS_RECEIVE_NEW',
	userName,
	repos
})

const reposLoadMore = (data) => ({
	type: 'LOAD_MORE_REPOS',
	data
})

const allReposLoaded = (data) => ({
	type: 'All_REPOS_LOADED',
	data
})

const changeUser = (userName) => ({
	type: 'CHANGE_USER',
	userName
})

const fetchRepos = (userName) => (dispatch, getState) => {
	const isNewUser = getState().currentUser !== userName;
	dispatch(requestRepos(userName))

	return api.fetchRepos(userName, isNewUser, getState().reposOffset).then((response) => {
		dispatch(receiveRepos(userName, isNewUser, response))
	})
}

// export const setSort = (sortType, sortKey) => ({
// 	type: 'SET_SORT',
// 	sortType,
// 	sortKey
// })

export const showRepoModal = (id) => ({
	type: 'SHOW_REPO_MODAL',
	id
})

export const showModal = (data) => ({
	type: 'SHOW_MODAL',
	data
})

export const loadMoreRepos = () => (dispatch, getState) => {
	if(getState().visibleReposCount < getState().repos.length) {
		dispatch(reposLoadMore())
	} else {
		dispatch(fetchRepos(getState().currentUser)).then(() => dispatch(reposLoadMore()))
	}
}

export const getUserPeros = (userName) => (dispatch, getState) => {
	dispatch(changeUser(userName))
	dispatch(fetchRepos(userName))
}