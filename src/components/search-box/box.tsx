import * as React from "react";
import { State } from "react-powerplug";
import { ISearchBox } from "../../models/view/ISearchBox";
import CloseSVG from "./close.svg";
import GoSVG from './right.svg';
import { ClearButton, GoButton, Input as NativeInput, Wrapper } from "./styles";

const SearchBox: React.SFC<ISearchBox> = ({ onSearch, clearField, onGo }) => {
  let textValue = '';
  return (
    <Wrapper>
      <State intial={{value: ""}}>
        {({ state, setState }) => (
          <React.Fragment>
            <NativeInput
              placeholder="Search News"
              onKeyUp={onSearch}
              onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setState({
                  value: e.currentTarget.value,
                });
                textValue = e.currentTarget.value;
              }}
              value={state.value}
            />
            {(!!state.value) ? <ClearButton onClick={(ev: KeyboardEvent & React.FormEvent<HTMLInputElement>) => {
              setState({
                value: '',
              });
              clearField(ev);
            }}>
            <CloseSVG />
            </ClearButton> : null }
          </React.Fragment>
        )}
      </State>
      <GoButton onClick={() => {
        onGo(textValue)
      }}>
        <div style={{position: 'absolute', height: '1.5rem', width: '1.5rem'}}>
          <GoSVG />
        </div>
      </GoButton>
    </Wrapper>
  );
};

export default SearchBox;
