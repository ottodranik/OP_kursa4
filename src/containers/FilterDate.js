import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { buildQueryStringForDate as buildQuery } from '../libs/query';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css'

// console.log(styles)

const FilterRender = ({ filterValue, text, location, onChange }) => {	
	return(
		<DayPickerInput onDayChange={onChange} value={location.query[filterValue] || ''} placeholder="MM-DD-YYYY" format="MM-DD-YYYY" />
	)
}

const mapStateToProps = (state, ownProps) => ({
	filterValue: ownProps.value,
	text: ownProps.children
})
const mapDispatchToProps = (dispatch, ownProps) => ({
	onChange: (value) => {
		ownProps.history.push({
			search: buildQuery(ownProps, value)
		})
	}
})
export const FilterDate = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterRender))