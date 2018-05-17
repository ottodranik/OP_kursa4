import React from 'react'
import { Filter } from '../../containers/Filter'
import { FilterDate } from '../../containers/FilterDate'

const FiltersList = ({ languages, filtersForks }) => {
  return (
	<div style={{display: 'inline-block', verticalAlign: 'middle'}}>
		<div style={{backgroundColor: '#a9a9a9', padding: '5px 15px', borderRadius: '5px', marginLeft: '10px'}}>
			<Filter value="has_open_issues" type="checkbox">
        Has open issues:
      </Filter>
			<Filter value="has_topics" type="checkbox" >
        Has topics:
      </Filter>
			<Filter value="starred_gt" type="input_number" >
        Starred:
      </Filter>
      <FilterDate value="updated_after" type="date" >
        Updated after date:
      </FilterDate>
      <Filter value="type" type="dropdown" options={filtersForks} >
        Type:
      </Filter>
      <Filter value="language" type="dropdown" options={['all'].concat(languages)} >
        Language:
      </Filter> 
		</div>
	</div>)
}

// FiltersList.PropTypes = {
// 	languages: PropTypes.array.isRequired,
// 	filtersForks: PropTypes.array.isRequired
// }

export default FiltersList