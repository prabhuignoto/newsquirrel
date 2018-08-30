import { DateTime } from "luxon";
import * as React from "react";
import { Fragment } from "react";
import { IQuickView } from "../../models/view/IQuickView";
import SpinnerSVG from './assets/spinner.svg';
import CloseSvg from "./assets/times-circle-solid.svg";
import {
  CloseBtn,
  Date,
  Description,
  Logo,
  LogoWrapper,
  Site,
  SpinnerWrapper,
  Thumbnail,
  ThumbnailWrapper,
  Title,
  Wrapper

} from "./styles";

const QuickView: React.SFC<IQuickView> = ({
  date,
  description,
  site,
  thumbnailURL,
  title,
  logoURL,
  closeQuickView,
  open,
  quickViewLoading
}) => {
  const dateLux = date
    ? DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED)
    : "";
  return (
    <Fragment>
      {open ? (
        <Wrapper>
          {logoURL ? <LogoWrapper>
            <Logo src={logoURL} />
          </LogoWrapper> : <Site>{site}</Site>}

          {dateLux ? <Date>{dateLux}</Date> : null}
          
          <Title>{title}</Title>
          
          <ThumbnailWrapper>
            <Thumbnail src={thumbnailURL} />
          </ThumbnailWrapper>
          
          <Description>{description}</Description>
          
          <CloseBtn onClick={closeQuickView}>
            <CloseSvg />
          </CloseBtn>
          
          {quickViewLoading ? <SpinnerWrapper>
            <SpinnerSVG />
          </SpinnerWrapper> : null}
        </Wrapper>
      ) : null}
    </Fragment>
  );
};

export default QuickView;
