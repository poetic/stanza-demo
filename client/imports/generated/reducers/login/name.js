import custom from '../../../custom/index';
import actionTypeConstants from '../../action-type-constants/index';

const reducer = (_state = '', _action) => {
  switch (_action.type) {
    case actionTypeConstants.login.changeName:
      return _action.value;
    default:
      return _state;
  }
}

const customize = custom['reducers/login/name'] || ((x) => x);

export default customize(reducer, { actionTypeConstants });
