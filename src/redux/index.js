import { combineReducers } from 'redux';

// this was aprt of the starter kit, don't think we are using yet
// import { reducer as formReducer } from 'redux-form';

import dataStoreSingle from './globals/DataStoreSingle/reducer';
import dataStoreMulti from './globals/DataStoreMulti/reducer';

export default combineReducers({
  // form: formReducer,
  dataStoreSingle,
  dataStoreMulti,
});
