import * as React from 'react';

import { AxiosResponse } from '../../../node_modules/axios';
import { Wrapper } from './styles';

interface IError {
  response?: AxiosResponse | null;
}

const Error: React.SFC<IError> = ({response}) => {
  return (
    <Wrapper>
      {response!.data!.message}
    </Wrapper>
  )
}

export default Error;
