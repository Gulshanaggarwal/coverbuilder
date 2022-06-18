import { createContext, useReducer } from "react";


export const FocusContext = createContext();

const initialState = {

    currentText: null,
    surfaceTextList: [],
    currentEmoji: null,
    surfaceEmojiList: [],
    deleteItem: null
}


const reducer = (state, action) => {

    switch (action.type) {
        case "SET_FOCUS_TO_TEXT":
            return {
                ...state,
                currentText: action.payload,
                currentEmoji: null
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
            break;
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
            break;
        case "TEXT_COLOR_CHANGE":
            return {
                ...state,
                surfaceTextList: state.surfaceTextList.map((ele) => {
                    if (ele.id === action.payload.id) {
                        ele.color = action.payload.color
                    }
                    return ele;
                })
            }
            break;
        case "ADD_EMOJI_TO_SURFACE":
            return {
                ...state,
                surfaceEmojiList: [...state.surfaceEmojiList, action.payload]
            }
            break;
        case "SET_FOCUS_TO_EMOJI":
            return {
                ...state,
                currentText: null,
                currentEmoji: action.payload
            }
            break;
        case "CHANGE_EMOJI_SIZE":
            return {
                ...state,
                surfaceEmojiList: state.surfaceEmojiList.map((ele) => {
                    if (ele.id === action.payload.id) {
                        ele.size = action.payload.size
                    }
                    return ele;
                })
            }
            break;
        case "SET_DELETE_ITEM":
            return {
                ...state,
                deleteItem: action.payload
            }
            break;
        case "DELETE_TEXT_FROM_SURFACE":
            return {
                ...state,
                surfaceTextList: state.surfaceTextList.filter((ele) => ele.id !== action.payload.id)
            }
        case "DELETE_EMOJI_FROM_SURFACE":
            return {
                ...state,
                surfaceEmojiList: state.surfaceEmojiList.filter((ele) => ele.id !== action.payload.id)
            }
            break;
        case "FOCUS_SET_TO_NONE":
            return {
                ...state,
                currentText: action.payload.currentText,
                currentEmoji: action.payload.currentEmoji
            }
            break;
        default:
            return state;
    }


}








export default function FocusContextProvider(props) {

    const [state, focusDispatch] = useReducer(reducer, initialState);

    const { currentText, surfaceTextList, currentEmoji, surfaceEmojiList, deleteItem } = state;
    return (
        <FocusContext.Provider value={{ currentText, surfaceTextList, currentEmoji, surfaceEmojiList, deleteItem, focusDispatch }}>
            {props.children}
        </FocusContext.Provider>
    )
}