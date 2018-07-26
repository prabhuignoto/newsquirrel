import 'bulma/css/bulma.css';
import * as React from 'react'
import { IFilters } from '../../models/view/IFilters';
import  Filter from "./filter";
import { Filters } from "./styles";

const filters: React.SFC<IFilters> = ({items,selectFilter}) => {
  return (
    <div className="tabs is-medium">
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
    </div>
  )
}

export default filters;

