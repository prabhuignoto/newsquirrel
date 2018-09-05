import * as React from "react";
import { ISearchBox } from "../../models/view/ISearchBox";
import CloseSVG from "./close.svg";
import { ClearButton, Input, Wrapper } from "./styles";

const SearchBox: React.SFC<ISearchBox> = ({
  onSearch,
  onInput,
  clearField,
  value,
  onRef
}) => {
  return (
    <Wrapper>
      <Input
        placeholder="Search News"
        onKeyUp={onSearch}
        onInput={onInput}
        value={value}
        innerRef={onRef}
      />
      {!!value ? (
        <ClearButton onClick={clearField}>
          <CloseSVG />
        </ClearButton>
      ) : null}
    </Wrapper>
  );
};

export default SearchBox;
