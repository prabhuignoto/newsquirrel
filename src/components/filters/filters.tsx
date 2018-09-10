import * as React from "react";
import { State } from "react-powerplug";
import { IFilters } from "../../models/view/IFilters";
import Filter from "./filter";
import { Filters, FiltersWrapper } from "./styles";

const filters: React.SFC<IFilters> = ({ items, update }) => {
  return (
    <State initial={{ uiItems: items }}>
      {({ state, setState }) => {
        const handleSelection = ({name, value} : {name: string, value: string}) => {
          setState({
            uiItems: state.uiItems.map(x => {
              let selected = false;
              if (x.name === name) {
                selected = true;
              }
              return Object.assign({}, x, {
                selected
              });
            })
          });
          update({
            variables: {
              value
            }
          })
        };
        return (
          <FiltersWrapper
            className="tabs is-medium"
            data-testid="main-tabs"
            pose="open"
            initialPose="close"
          >
            <Filters>
              {state.uiItems.map(filter => (
                <Filter
                  {...filter}
                  key={filter.name}
                  selectFilter={handleSelection}
                />
              ))}
            </Filters>
          </FiltersWrapper>
        );
      }}
    </State>
  );
};

export default filters;
