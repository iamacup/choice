
import _ from 'lodash';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GLOBAL_STORE_SINGLE_UPDATE': {
      const modifiedStatePart = {};


      modifiedStatePart[action.mainID] = _.assign(
        {},
        state[action.mainID],
        action.data,
      );


      return _.assign({}, state, modifiedStatePart);
    }
    default:
      return state;
  }
};
