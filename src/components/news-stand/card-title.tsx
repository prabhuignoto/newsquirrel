import * as React from "react";
import { AppMode } from "../../enums/appMode";
import { CardTitle, TitleAnchor } from "./styles";

const Title = ({
  appMode,
  articleUrl,
  title
}: {
  appMode: {
    name: string;
    value: AppMode
  };
  articleUrl: string;
  title: string;
}) => {
  return (
    <CardTitle appMode={appMode}>
      <TitleAnchor
        appMode={appMode}
        href={articleUrl}
        target="_new"
        title={title}
      >
        {title ? <span>{title}</span> : null}
      </TitleAnchor>
    </CardTitle>
  );
};

export default Title;
