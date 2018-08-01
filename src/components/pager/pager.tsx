import * as React from 'react'
import { IPager } from "../../models/view/IPager";
import {Next, PageLabel, Previous, Wrapper } from "./styles";

const Pager: React.SFC<IPager> = ({activePage, onPrevious, onNext, disableNext, disablePrevious}) => (
  <Wrapper>
    <Previous onClick={onPrevious} disabled={disablePrevious} disable={disablePrevious}>Previous</Previous>
    <PageLabel>{activePage}</PageLabel>
    <Next onClick={onNext} disabled={disableNext} disable={disableNext}>Next</Next>
  </Wrapper>
);

export default Pager;