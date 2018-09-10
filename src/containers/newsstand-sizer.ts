import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { compose, defaultProps } from "recompose";
import ToggleSelect from "../components/toggle-select/toggle-select";
import toggleSelectSize from "../enums/toggleSelectSize";
import { ToggleType } from "../models/view/IToggleSelect";

const query = gql`
  query {
    newStandSizes @client {
      sizes {
        name
        value
      }
    }
    defaultNewstandSize @client {
      value
    }
  }
`;

const mutation = gql`
  mutation ($name: String!, $value: Int!) {
    updateNewstandSize(name: $name, value: $value) @client
  }
`;

export default compose(
  graphql(query, {
    props: ({
      data: {
        newStandSizes: { sizes },
        defaultNewstandSize
      }
    }: any) => ({
      items: sizes.map((x: any) => {
        let selected = false;
        if (x.value === defaultNewstandSize.value) {
          selected = true;
        }
        return Object.assign({}, x, {
          selected
        });
      })
    })
  }),
  graphql(mutation, {
    name: 'updateNewstandSize',
    props: ({updateNewstandSize}: any) => ({
      update: updateNewstandSize
    })
  }),
  defaultProps({
    // label: 'Display density',
    size: toggleSelectSize.SMALL,
    type: ToggleType.RESIZER
  })
)(ToggleSelect);
