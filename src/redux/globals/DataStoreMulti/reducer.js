import _ from 'lodash';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GLOBAL_STORE_MULTI_UPDATE': {
      const modifiedStatePart = {};

      modifiedStatePart[action.mainID] = _.assign({}, state[action.mainID]);
      modifiedStatePart[action.mainID][action.subID] = _.assign(
        {},
        action.data,
      );

      return _.assign({}, state, modifiedStatePart);
    }
    default:
      return state;
  }
};
