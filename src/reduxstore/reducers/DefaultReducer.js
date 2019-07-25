/*********************************** actions ***********************************/

/************************************ State ************************************/
const initialState = {
  someVariable: '',
  error: null
};

/*********************************** Reducers **********************************/
export const DefaultReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DefaultReducer;