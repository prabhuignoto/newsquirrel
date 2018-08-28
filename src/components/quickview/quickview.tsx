import * as React from 'react'
// import LoaderSize from '../../enums/loaderSize';
import { IQuickView } from '../../models/view/IQuickView';
// import Loader from '../loader/loader';
import {CloseButton, Header, HeaderText, IFrameContent, Wrapper} from './styles';

const QuickView:React.SFC<IQuickView> = ({url, onClose, onLoadComplete, onError}) => {
  return (
    <Wrapper>
      <Header>
        <HeaderText>QuickViewer</HeaderText>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Header>
      <IFrameContent>
        <iframe
          src={url}
          width="95%"
          height="95%"
          sandbox="allow-scripts"
          onLoad={onLoadComplete}
          onError={onError}
        />
      </IFrameContent>
    </Wrapper>
  )
}

export default QuickView;

