import React, { createContext, useReducer } from 'react';
import miscReducer from './miscReducer';
import { ActionTypes } from './types';

// Declare interfaces
interface MiscContext {
  theme: string;
  SwitchTheme: (state: string) => void;
}

const defaultState: MiscContext = {
  theme: 'lightTheme',
  SwitchTheme: () => {},
};

// Create context
export const miscContext = createContext(defaultState);
// Create provider component
const MiscProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(miscReducer, defaultState);
  // Action Fucntion
  const SwitchTheme = (state: string) => {
    console.log(state);
    dispatch({
      type: ActionTypes.SET_THEME,
      payload: { state: state },
    });
  };

  return (
    <miscContext.Provider
      value={{
        theme: state.theme,
        SwitchTheme,
      }}
    >
      {children}
    </miscContext.Provider>
  );
};

export default MiscProvider;
