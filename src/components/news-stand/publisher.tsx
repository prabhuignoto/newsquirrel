import { DateTime } from "luxon";
import * as React from "react";

import { AppMode } from "../../enums/appMode";
import NewsStandSize from "../../enums/newsStandSize";
import EyeSolid from "./assets/eye-solid.svg";
import { CheckPreview, Controls, PublishDate, Publisher } from "./styles";

interface IPublisher {
  size: NewsStandSize;
  appMode: {
    name: string,
    value:AppMode
  };
  publishedAt: string;
  updateQuickviewUrl: (data: any) => void;
  articleUrl: string;
}

const publisher = ({
  appMode,
  articleUrl,
  publishedAt,
  size,
  updateQuickviewUrl,
}: IPublisher) => {
  return (
    <Publisher size={size} appMode={appMode}>
      <PublishDate dateTime={publishedAt}>
        {DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATETIME_SHORT)}
      </PublishDate>
      <Controls className="is-hidden-touch">
        <CheckPreview
          onClick={() => {
            updateQuickviewUrl({
              variables: {
                url: articleUrl
              }
            });
          }}
        >
          <EyeSolid title="Quick View" />
        </CheckPreview>
      </Controls>
    </Publisher>
  );
};

export default publisher;
