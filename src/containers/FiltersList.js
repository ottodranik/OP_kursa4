import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { FILTERS_FORKS } from '../config'
import FiltersList from '../components/FiltersList'

const mapStateToProps = (state, ownProps) => ({
	languages: Object.keys(state.languages),
	filtersForks: FILTERS_FORKS
})
const FiltersListCnt = withRouter(connect(
	mapStateToProps
)(FiltersList))

export default FiltersListCnt