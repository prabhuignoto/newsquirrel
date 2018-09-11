import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, defaultProps } from "recompose";
import ToggleSelect from "../components/toggle-select/toggle-select";
import { AppMode } from "../enums/appMode";

const mutation = gql`
  mutation($name: String!, $value: Int!) {
    updateAppMode(name: $name, value: $value) @client
  }
`;

export default compose(
  graphql(mutation, {
    name: "updateAppMode",
    props: ({ updateAppMode }) => {
      return {
        items: [
          {
            name: "Day Mode",
            selected: true,
            value: AppMode.LIGHT
          },
          {
            name: "Night Mode",
            selected: false,
            value: AppMode.DARK
          }
        ],
        update: updateAppMode
      };
    }
  })
)(ToggleSelect);
