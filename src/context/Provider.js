import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import contactInitialState from './initialStates/contactInitialState';
import authReducer from './reducers/authReducer';
import contactReducer from './reducers/contactReducer';

// cần export GlobalContext để sử dụng ở những file khác
export const GlobalContext = createContext({}); // Cần 1 giá trị mặc định {}

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactState, contactDispatch] = useReducer(
    contactReducer,
    contactInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        contactState,
        authDispatch,
        contactDispatch,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
