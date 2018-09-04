import * as React from 'react'
import IPocketLogin from '../../models/view/IPocketLogin';
import PocketSVG from './assets/pocket.svg';
import {IconWrapper, Link, Wrapper} from './styles';

export const PocketLogin:React.SFC<IPocketLogin> = ({loginUrl, requestToken, redirectURI}) => {
  const pocketUrl = `${loginUrl}${requestToken}&redirect_uri=${redirectURI}`;
  return (
    <Wrapper>
      <Link href={pocketUrl}>
        <IconWrapper>
          <PocketSVG />
        </IconWrapper>Login with Pocket
      </Link>
    </Wrapper>
  );
}
