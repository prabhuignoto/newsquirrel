import * as React from 'react';

import { ILoader } from '../../models/view/ILoader';
import { LoaderIndicator, Wrapper } from './styles';

const Loader: React.SFC<ILoader> = ({start, stop, size}) => (
  <Wrapper size={size} data-testid="rt-loader">
    <LoaderIndicator start={start ? 1 : 0} size={size} />
  </Wrapper>
);

export default Loader;
