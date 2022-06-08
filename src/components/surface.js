import { Box } from "@mui/system";
import { ItemTypes } from "../itemTypes";
import { useDrop } from "react-dnd";
import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { Rnd } from "react-rnd";
import { FocusContext } from "../contexts/focusContext";


const handleBackgroundImage = (item, background, setBackground) => {



    const { photo } = item;
    const { url } = photo;

    setBackground(url);
    return;
}

const handleText = (item, focusDispatch) => {


    // const data = { id, fontSize: item.size, fontWeight: item.weight, text: item.text }
    // setsurfaceTextList((existingItems) => [...existingItems, data]);

    const id = nanoid(10);

    focusDispatch({
        type: 'ADD_TEXT_TO_SURFACE',
        payload: { ...item, id }
    })





}

export default function Surface() {


    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [ItemTypes.BG_IMAGE, ItemTypes.TEXT],
        drop: (item) => handleDropItem(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })

    }))

    const [background, setBackground] = useState(false);

    const [currentFocus, setCurrentFocus] = useState(null);
    const [, surfaceTextList, focusDispatch] = useContext(FocusContext);
    console.log(surfaceTextList);


    const handleDropItem = (item) => {

        if (item.type === "BG_IMAGE") {
            handleBackgroundImage(item, background, setBackground);
        }
        else if (item.type === "TEXT") {
            handleText(item, focusDispatch);
        }

    }

    const handleFocus = (e, text) => {
        setCurrentFocus(text.id);

        // dispatch style bar

        focusDispatch({
            type: 'SET_STYLES',
            payload: text
        })

    }


    const handleOnResize = (textId) => {
        setCurrentFocus(textId);
    }

    const handleResizeStop = (textId) => {
        setCurrentFocus(textId);
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', margin: '1rem 0', }}>
            <Box className="surface" ref={drop} sx={{
                position: 'relative',
                width: '80%', height: '60%', backgroundColor: 'common.white',
                boxShadow: 2,
                '&:hover': {
                    border: 2,
                    borderColor: 'primary.main'
                },
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                {
                    surfaceTextList.length > 0 && surfaceTextList.map((text) => (
                        <Rnd key={text.id} bounds="parent" onResize={() => handleOnResize(text.id)} onResizeStop={() => handleResizeStop(text.id)}  >
                            <Box onFocus={(e) => handleFocus(e, text)} component="div" fontSize={text.size} fontWeight={text.weight} fontFamily={`"${text.font}",${text.family}`} sx={{ outline: 'none', backgroundColor: 'none', width: '100%', height: '100%', border: currentFocus === text.id ? 2 : 0, borderColor: 'primary.main' }} contentEditable={true} suppressContentEditableWarning={true}>{text.text} </Box>
                        </Rnd >
                    ))
                }
            </Box>
        </Box>
    )
}