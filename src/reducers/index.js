import { combineReducers } from 'redux'
import { calculateLangs } from '../libs'
import { OFFSET_STEP, LOAD_MORE_STEP } from '../config'

const currentUser = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return action.userName
    default:
      return state
  }
}

const allReposLoaded = (state = false, action) => {
  switch (action.type) {
    case 'All_REPOS_LOADED':
      return true
    default:
      return state
  }
}

const visibleReposCount = (state = LOAD_MORE_STEP, action) => {
  switch (action.type) {
    case 'LOAD_MORE_REPOS':
      return state + LOAD_MORE_STEP
    default:
      return state
  }
}

const reposOffset = (state = 0, action) => {
  switch (action.type) {
    case 'FETCH_REPOS_RECEIVE':
      return state + OFFSET_STEP
    case 'CHANGE_USER':
      return 0
    default:
      return state
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_REPOS_REQUEST':
      return true
    case 'FETCH_REPOS_RECEIVE':
      return false
    default:
      return state
  }
}

const languages = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_REPOS_RECEIVE':
      return calculateLangs(state)(action.repos, 'language')
    default:
      return state
  }
}

const sort = (state = {type: "SORT_NAME", direction: "SORT_ASC"}, action) => {
  switch (action.type) {
    case "SET_SORT":
      return {
        ...state,
        [action.sortKey]: action.sortType
      }
    default:
      return state
  }
}


const repos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_REPOS_RECEIVE':
      return [
        ...state,
        ...action.repos
      ]
    case 'FETCH_REPOS_RECEIVE_NEW':
      return action.repos
    default:
      return state
  }
}

const filters = (state = "SORT_NAME", action) => {
  switch (action.type) {
    case "SET_SORT_TYPE":
      return action.sortType
    default:
      return state
  }
}

const reposApp = combineReducers({
  repos,
  reposOffset,
  visibleReposCount,
  allReposLoaded,
  languages,
  sort,
  currentUser,
  loading,
  // routing: routerReducer
})

export default reposApp
