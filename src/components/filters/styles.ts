import Styled from 'react-emotion';

const Filters = Styled('ul')`
  display: flex;
  border-bottom: transparent !important;
`;


const FiltersWrapper = Styled('div')`
  width: 100%;
  background: #2B2D42;
  padding: 0.75rem;
`;

const Filter = Styled('li')<{selected: boolean}>`
  display: flex;
  text-transform: capitalize;
  > a {
    color: ${p => p.selected ? '#EF233C !important' : '#EDF2F4'};
    border-bottom: transparent !important;
    &:hover {
      color: #EF233C;
    }
  }
`;

export {
  Filter,
  Filters,
  FiltersWrapper
}
