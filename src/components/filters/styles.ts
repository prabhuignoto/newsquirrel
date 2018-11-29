import Styled from '@emotion/styled';

const Filters = Styled('ul')`
  display: flex;
  border-bottom: transparent !important;
`;


const FiltersWrapper = Styled('div')`
  width: 100%;
  background: #2B2D42;
  padding: 0.75rem;
  border-bottom: 0.01rem solid #A1ABBC;
`;

const Filter = Styled('li')<{selected: boolean}>`
  display: flex;
  text-transform: capitalize;
  border-radius: 2px;
  font-size: 1.2rem;
  text-transform: uppercase;
  background: ${p => p.selected ? '#EF233C' : ''};
  > a {
    color: ${p => p.selected ? '#fff !important' : '#EDF2F4'};
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
