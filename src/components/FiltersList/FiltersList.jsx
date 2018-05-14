import React from 'react'
import { Filter } from '../../containers/Filter'
import { FilterDate } from '../../containers/FilterDate'

const FiltersList = ({ languages, filtersForks }) => {
  return (
	<div style={{display: 'inline-block'}}>
		<hr />
		<div>
			<Filter value="has_open_issues" type="checkbox">
        has open issues
      </Filter>{", "}
			<Filter value="has_topics" type="checkbox" >
       has topics
      </Filter>{", "}
			<Filter value="starred_gt" type="input_number" >
       starred
      </Filter>{", "}
      <FilterDate value="updated_after" type="date" >
       updated after
      </FilterDate>{", "}
      <Filter value="type" type="dropdown" options={filtersForks} >
       type
      </Filter>{", "}
      <Filter value="language" type="dropdown" options={['all'].concat(languages)} >
       language
      </Filter> 
		</div>
	</div>)
}

// FiltersList.PropTypes = {
// 	languages: PropTypes.array.isRequired,
// 	filtersForks: PropTypes.array.isRequired
// }

export default FiltersList