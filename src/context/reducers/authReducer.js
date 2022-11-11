/**
 * state: ở đây là previous state
 * {type, payload}: là dữ liệu action được dispatch đến reducer. Trong đó:
 * type: loại action - bắt tay giữa action & reducers thông qua type
 * payload: dữ liệu mới gửi kèm action, tương ứng với từng type
 */
const authReducer = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {};

    default:
      return state; // trả lại previous state
  }
};

export default authReducer;
