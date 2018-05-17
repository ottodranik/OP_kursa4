import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { buildQueryStringForToggle, buildQueryStringForInputNumber, buildQueryStringForDropdown } from '../libs/query';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import styles from '../components/FiltersList/FiltersList.css'
import 'react-day-picker/lib/style.css'

const LABELS = {
	has_open_issues: 'Has open issues',
	has_topics: 'Has topics',
	starred_gt: 'Shared times',
	type: 'Type',
	language: 'Language',
	updated_after: 'Updated after date',
};

const buildQueryString = (ownProps, value) => {
	switch(ownProps.type) {
		case 'checkbox':
			return buildQueryStringForToggle(ownProps)
		case 'input_number': 
			return buildQueryStringForInputNumber(ownProps, value)
		case 'dropdown': 
			return buildQueryStringForDropdown(ownProps, value)
	}
}

const renderCheckbox = (checked, text, onChange) => {
	return (
		<div className={styles.filter}>
			<label>
				<span>{text}</span> 
				<input onChange={onChange} type="checkbox" checked={checked} />
			</label>
		</div>
	)
}
const renderInputNumber = (checked, text, onChange, defaultValue) => {	
	let input;
	return (
		<div className={styles.filter}>
			<label>
				<span>{text}</span>
				<input value={defaultValue || 0} onChange={() => onChange(input.value || 0)} type="number" style={{width: '50px'}} ref={node => {
					input = node
				}} />
			</label>
		</div>
	)
}
const renderDropdown = (checked, text, dropdownOptions, onChange) => {	
	return (
		<div className={styles.filter}>
			<label>
				<span>{text}</span>
				<select onChange={(e) => {
						onChange(e.target.value || dropdownOptions[0]) 
				}}
				>
					{dropdownOptions.map(option => 
						<option key={option} value={option}>{option}</option>
					)}
				</select>
			</label>
		</div>
	)
}
const FilterRender = ({ checked, filterType, filterValue, dropdownOptions, text, location, onChange }) => {	
	switch(filterType) {
		case 'checkbox':
			return renderCheckbox(checked, text, onChange)
		case 'input_number': 
			return renderInputNumber(checked, text, onChange, location.query[filterValue])
		case 'dropdown': 
			return renderDropdown(checked, text, dropdownOptions, onChange)
	}
}
const mapStateToProps = (state, ownProps) => ({
  checked: ~Object.keys(ownProps.location.query).indexOf(ownProps.value),
	filterType: ownProps.type,
	filterValue: ownProps.value,
	dropdownOptions: ownProps.options,
	text: ownProps.children
})
const mapDispatchToProps = (dispatch, ownProps) => ({
	onChange: (value) => {
		ownProps.history.push({
			search: buildQueryString(ownProps, value)
		})
	}
})
export const Filter = withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterRender))