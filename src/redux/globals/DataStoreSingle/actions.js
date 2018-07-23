
// eslint-disable-next-line import/prefer-default-export
export const doUpdate = (mainID, data) => (dispatch) => {
  dispatch({
    type: 'GLOBAL_STORE_SINGLE_UPDATE',
    mainID,
    data,
  });
};
