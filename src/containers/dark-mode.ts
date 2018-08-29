import { connect } from 'react-redux';
import {compose, defaultProps, StateHandler, StateHandlerMap, withStateHandlers} from 'recompose';
import { Dispatch } from 'redux';
import { updateAppMode } from '../actions/creators';
import ToggleSelect from '../components/toggle-select/toggle-select';
import toggleSelectSize from '../enums/toggleSelectSize';
import { ToggleType } from '../models/view/IToggleSelect';
import { AppMode } from './../enums/appMode';
import { IAppMode, IAppState } from './../models/view/IAppState';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  switchMode: (mode: IAppMode) => dispatch(updateAppMode(mode))
});

const mapStateToProps = (state: IAppState) => ({
  appMode: state.options.defaultAppMode,
  items: state.options.availableAppModes.map(x => {
    let selected =  false;
    if(x.value === state.options.defaultAppMode.value) {
      selected = true;
    }
    return  Object.assign({}, x, {
      selected
    })
  }),
})

interface IProps {
  switchMode: (mode: IAppMode) => void;
}

interface IStateHandlers<T> extends StateHandlerMap<T> {
  onToggle: StateHandler<T>,
}

interface IOption {
  name: string;
  value: AppMode;
  selected: boolean;
}

interface ILocalState {
  items: IOption[];
}

const initialState = ({ items }: ILocalState) => ({
  items,
});

const stateHandlers = {
  onToggle: ({items}: ILocalState, {switchMode}: IProps) => (name: string, mode: AppMode) => {
    switchMode({
      name,
      value: mode
    });
    return {
      items: items.map(x => {
        if (x.value === mode) {
          return Object.assign({}, x, {
            selected: true
          })
        } else {
          return Object.assign({}, x, {
            selected: false
          })
        }
      })
  }
}
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers<ILocalState, IStateHandlers<ILocalState>>(initialState, stateHandlers),
  defaultProps({
    size: toggleSelectSize.SMALL,
    type: ToggleType.APP_MODE
  })
)(ToggleSelect);
