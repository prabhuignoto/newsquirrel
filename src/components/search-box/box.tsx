import * as React from "react";
import { Input } from "react-powerplug";
import { ISearchBox } from "../../models/view/ISearchBox";
import CloseSVG from "./close.svg";
import { ClearButton, Input as NativeInput, Wrapper } from "./styles";

const SearchBox: React.SFC<ISearchBox> = ({ onSearch, clearField }) => {
  return (
    <Wrapper>
      <Input>
        {({ value, set }) => (
          <React.Fragment>
            <NativeInput
              placeholder="Search News"
              onKeyUp={onSearch}
              onChange={(e: React.FormEvent<HTMLInputElement>) =>
                set(e.currentTarget.value)
              }
              value={value}
            />
            <ClearButton onClick={(ev: KeyboardEvent & React.FormEvent<HTMLInputElement>) => {
              set('');
              clearField(ev);
            }}>
            <CloseSVG />
            </ClearButton>
          </React.Fragment>
        )}
      </Input>
    </Wrapper>
  );
};

export default SearchBox;
