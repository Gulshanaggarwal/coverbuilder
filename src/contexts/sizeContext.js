import { createContext, useReducer } from "react";


export const SizeContext = createContext();

const initialState = {
    coverFor: 'Hashnode',
    width: '1200',
    height: '630'
}


const reducer = (state, action) => {
    switch (action.type) {

        case "SET_COVER":
            const { coverStyle, width, height } = action.payload;
            return {
                ...state,
                coverFor: coverStyle,
                width,
                height

            }
            break;
        default:
            return state
    }

}






export default function SizeContextProvider(props) {
    const [sizeState, sizeDispatch] = useReducer(reducer, initialState);

    return (
        <SizeContext.Provider value={[sizeState, sizeDispatch]}>
            {props.children}
        </SizeContext.Provider>
    )
}