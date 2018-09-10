import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, defaultProps } from "recompose";
import ToggleSelect from "../components/toggle-select/toggle-select";
import toggleSelectSize from "../enums/toggleSelectSize";
import { ToggleType } from "../models/view/IToggleSelect";

const query = gql`
  query {
    appModes @client {
      items {
        name
        value
      }
    }
    appMode @client {
      name
      value
    }
  }
`;
const mutation = gql`
  mutation($name: String!, $value: Int!) {
    updateAppMode(name: $name, value: $value) @client
  }
`;

export default compose(
  graphql(query, {
    props: ({ data: { appModes, appMode } }) => {
      return {
        items: appModes.items.map(x => {
          let selected = false;
          if (x.name === appMode.name) {
            selected = true;
          }
          return Object.assign({}, x, {
            selected
          });
        }),
        value: appMode
      };
    }
  }),
  graphql(mutation, {
    name: "updateAppMode",
    props: ({ updateAppMode }) => {
      return {
        update: updateAppMode
      };
    }
  }),
  defaultProps({
    size: toggleSelectSize.SMALL,
    type: ToggleType.APP_MODE
  })
)(ToggleSelect);
