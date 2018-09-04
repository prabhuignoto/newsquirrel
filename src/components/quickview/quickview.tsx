import gql from "graphql-tag";
import { DateTime } from "luxon";
import * as React from "react";
import { Fragment } from "react";
import { Query } from "react-apollo";
import { IQuickView } from "../../models/view/IQuickView";
import SpinnerSVG from "./assets/spinner.svg";
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

interface IData {
  getIFramelyData: {
    site: string;
    thumbnailUrl: string;
    logoUrl: string;
    description: string;
    date: string;
    url: string;
    title: string;
  }
}

class QuickViewQuery extends Query<IData, {}> {}

const query = gql`
  query getData($url: String!) {
    getIFramelyData(url: $url) {
      site
      thumbnailUrl
      logoUrl
      description
      date
      url
      title
    }
  }
`;

const QuickView: React.SFC<IQuickView> = ({
  closeQuickView,
  open,
  quickViewUrl
}) => (
  <QuickViewQuery query={query} variables={{ url: quickViewUrl }}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <SpinnerWrapper>
            <SpinnerSVG />
          </SpinnerWrapper>
        );
      } else if (!error) {
        const {
          site,
          thumbnailUrl,
          logoUrl,
          description,
          date,
          title
        } = data!.getIFramelyData
        const dateLux = date
          ? DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED)
          : "";
        return (
          <Fragment>
            {open ? (
              <Wrapper>
                {logoUrl ? (
                  <LogoWrapper>
                    <Logo src={logoUrl} />
                  </LogoWrapper>
                ) : (
                  <Site>{site}</Site>
                )}

                {dateLux ? <Date>{dateLux}</Date> : null}

                <Title>{title}</Title>

                <ThumbnailWrapper>
                  <Thumbnail src={thumbnailUrl} />
                </ThumbnailWrapper>

                <Description>{description}</Description>

                <CloseBtn onClick={closeQuickView}>
                  <CloseSvg />
                </CloseBtn>
              </Wrapper>
            ) : null}
          </Fragment>
        );
      } else {
        return <span>Error</span>
      }
    }}
  </QuickViewQuery>
);

export default QuickView;
