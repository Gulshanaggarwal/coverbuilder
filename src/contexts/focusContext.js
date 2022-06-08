import { createContext, useReducer } from "react";


export const FocusContext = createContext();

const initialState = {

    currentText: null,
    surfaceTextList: []
}


const reducer = (state, action) => {

    switch (action.type) {
        case "SET_STYLES":
            return {
                ...state,
                currentText: action.payload
            }
            break;
        case "ADD_TEXT_TO_SURFACE":
            return {
                ...state,
                surfaceTextList: [...state.surfaceTextList, action.payload]
            }
        case "FONT_CHANGE":
            return {
                ...state,
                surfaceTextList: state.surfaceTextList.map((ele) => {
                    if (ele.id === action.payload.id) {
                        ele.font = action.payload.font
                        ele.family = action.payload.family
                    }
                    return ele;

                })
            }
        case "FONT_SIZE_CHANGE":
            return {
                ...state,
                surfaceTextList: state.surfaceTextList.map((ele) => {
                    if (ele.id === action.payload.id) {
                        ele.size = action.payload.size
                    }
                    return ele;
                })
            }
        default:
            return state;
    }


}








export default function FocusContextProvider(props) {

    const [state, focusDispatch] = useReducer(reducer, initialState);

    const { currentText, surfaceTextList } = state;
    return (
        <FocusContext.Provider value={[currentText, surfaceTextList, focusDispatch]}>
            {props.children}
        </FocusContext.Provider>
    )
}