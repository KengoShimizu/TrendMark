import React, { createContext, useReducer } from 'react';
import { Reducer, StateType, ActionType } from './Reducer';

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const initialState = { 
  sample: false
};

export const ReducerContext = createContext({} as ContextType);

type ProviderProps = {
  children: React.ReactNode;
};

export const ReducerProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <ReducerContext.Provider value={{ state, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};