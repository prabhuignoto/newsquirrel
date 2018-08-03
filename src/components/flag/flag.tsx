import * as React from 'react';

import { IFlag } from '../../models/view/IFlag';
import { Icon, Wrapper } from './styles';

const Flag:React.SFC<IFlag> = ({ code }) => (
  <Wrapper>
    <Icon url={`https://www.countryflags.io/${code}/flat/64.png`} aria-label="icon"/>
  </Wrapper>
)
  
export default Flag;
