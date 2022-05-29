import { createContext, useReducer } from "react";

export const SearchContext = createContext();

const initialState = {
    searchQuery: ""
}

const reducer = (state, action) => {

    switch (action.type) {
        case "SET_SEARCH_QUERY":
            return {
                ...state,
                searchQuery: action.payload
            }
            break;
        default:
            return state
    }
}

export default function SearchContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <SearchContext.Provider value={[state, dispatch]}>
            {props.children}
        </SearchContext.Provider>
    )
}