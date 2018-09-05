import * as React from 'react'
import { IFilters } from '../../models/view/IFilters';
import  Filter from "./filter";
import { Filters, FiltersWrapper } from "./styles";

const filters: React.SFC<IFilters> = ({items,selectFilter}) => {
  return (
    <FiltersWrapper className="tabs is-medium" data-testid="main-tabs"  pose="open" initialPose="close">
      <Filters>
        {
          items.map(
            filter => (
            <Filter 
              {...filter}
              key={filter.name}
              selectFilter={selectFilter}
            />)
          )
        }
      </Filters>
    </FiltersWrapper>
  )
}

export default filters;