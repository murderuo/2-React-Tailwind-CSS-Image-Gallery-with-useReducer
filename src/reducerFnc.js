const reducerFnc = (state, action) => {
  // console.log(state.input);
  // console.log(action.payload);
  
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        data: [],
        loading: true,
        error: '',
        input: state.input,
      };
    case 'FETCH_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: '' };
    case 'FETCH_ERROR':
      return { ...state, data: [], loading: false, error: action.payload };
    case 'INPUT_CHANGE':
      return { ...state, input: action.payload };
    case 'FORM_SUBMIT':
      return { ...state,  formSubmitInput:state.input,loading:false };
      // return console.log('payload data',state.input);

    default:
      return state;
  }
};

export default reducerFnc;
