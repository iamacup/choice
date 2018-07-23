
// eslint-disable-next-line import/prefer-default-export
export const doUpdate = (mainID, subID, data) => (dispatch) => {
  dispatch({
    type: 'GLOBAL_STORE_MULTI_UPDATE',
    mainID,
    subID,
    data,
  });
};
