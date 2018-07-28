import Styled from "styled-components";

const Filters = Styled.ul`
  display: flex;
  margin-top: 1rem;
`;

const Filter = Styled.li`
  display: flex;
  text-transform: capitalize;
  &.selected {
    > a {
      color: #EF233C;
    }
  }
`;

export {
  Filter,
  Filters,
}

