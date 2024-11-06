import { createContext, useReducer } from 'react';

export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_SEARCH = 'SET_SEARCH';

export const FilterStateContext = createContext("");
export const FilterDispatchContext = createContext("");

const initialState = { slides: [], loading: false, error: null };

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(initialState);

    return (
      <FilterStateContext.Provider value={state}>
        <FilterDispatchContext.Provider value={dispatch}>
          {children},
          
        </FilterDispatchContext.Provider>
      </FilterStateContext.Provider>
    );
};
