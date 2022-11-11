const contactReducer = (state, {type, payload}) => {
  switch (type) {
    case 'GET_CONTACTS':
      return {};

    default:
      return state; // trả lại previous state
  }
};

export default contactReducer;
