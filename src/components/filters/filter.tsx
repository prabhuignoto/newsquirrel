import * as React from 'react'
import { IFilter } from '../../models/view/IFilter';
import { Filter } from "./styles";

function handler(fn: (filter: IFilter) => void, name: string, value: string) {
  return function innerFunction(ev: React.MouseEvent) {
    fn({
      name,
      value
    } as IFilter)
  }
}


const filter:React.SFC<IFilter> = ({name, value, selectFilter, selected}) => {
  return (
    <Filter
      className={`${selected ? 'selected' : ''}`}
      onClick={handler(selectFilter, name, value)}>
        <a>{name}</a>
    </Filter>
  )
};

export default filter;