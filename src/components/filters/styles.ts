import Styled from "styled-components";

const Filters = Styled.ul`
  display: flex;
  border-bottom: none !important;
`;

const FiltersWrapper = Styled.div`
  width: 100%;
  background: #2B2D42;
  padding-left: 2rem;
`;

const Filter = Styled.li<{selected: boolean}>`
  display: flex;
  text-transform: capitalize;
  > a {
    color: ${p => p.selected ? '#EF233C !important' : '#EDF2F4'};
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
