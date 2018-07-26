import { connect } from "react-redux";
import { compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers } from "recompose";
import { Dispatch } from "redux";
import { switchCountry } from "../actions/creators";
import Dropdown from "../components/drodpdown/dropdown";
import { IAppState } from '../models/view/IAppState';

const mapStateToProps = (state: IAppState) => ({
  category: state.options.filter.categories[0],
  items: state.options.defaultCountries,
  page: state.options.activePage
});

interface IProps {
  category: string;
  page: number;
  updateCountry: (country: string, category: string, page: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCountry: (country: string, category: string, page: number) => dispatch(switchCountry(country, category, page))
});

interface ILocalState {
  show: boolean;
  selectedItem: string;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onClick: StateHandler<T>
  onSelect: StateHandler<T>
}

const initialState = ({ show = false, selectedItem = '' }) => ({show, selectedItem});

const stateHandlers = {
  onClick: ({show}: ILocalState, p: IProps) => () => ({
    show: !show
  }),
  onSelect: (state: ILocalState, {updateCountry, category, page}: IProps) => (country: string) => {
    updateCountry(country, category, page);
    return {selectedItem: country}
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    label: 'Switch country'
  })
)(Dropdown);
