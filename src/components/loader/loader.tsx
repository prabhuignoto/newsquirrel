import * as React from 'react';

import { ILoader } from '../../models/view/ILoader';
import { LoaderIndicator, Wrapper } from './styles';

const Loader: React.SFC<ILoader> = ({start, stop, size}) => (
  <Wrapper size={size}>
    <LoaderIndicator start={start} stop={stop} />
  </Wrapper>
);

export default Loader;
