import { stringify, parse } from 'qs'

export const buildQueryStringForDate = (ownProps, value) => {
	const location = ownProps.location
	let query = Object.assign({}, location.query)
	query[ownProps.value] = value.format('MM-DD-YYYY')
	return '?'+stringify(query)
}

export const buildQueryStringForToggle = (ownProps) => {
	const location = ownProps.location
	let query = Object.assign({}, location.query)
  if(!~Object.keys(query).indexOf(ownProps.value)) {
		query[ownProps.value] = true
  } else {
    delete query[ownProps.value]
	}
	return '?'+stringify(query)
}

export const buildQueryStringForInputNumber = (ownProps, value) => {
	const location = ownProps.location
	let query = Object.assign({}, location.query)
	query[ownProps.value] = value
	return '?'+stringify(query)
}

export const buildQueryStringForDropdown = buildQueryStringForInputNumber