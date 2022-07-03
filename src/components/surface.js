import { Box } from "@mui/system";
import { ItemTypes } from "../itemTypes";
import { useDrop } from "react-dnd";
import { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { FocusContext } from "../contexts/focusContext";
import SurfaceEmoji from "./surfaceEmoji";
import { SizeContext } from "../contexts/sizeContext";
import SurfaceText from "./surfaceText";
import DeleteSurfaceItem from "./deleteSurfaceItem";


const handleBackgroundImage = (item, background, setBackground) => {



    const { photo } = item;
    const { url } = photo;

    setBackground(url);
    return;
}

const handleText = (item, focusDispatch) => {

    const id = nanoid(10);

    focusDispatch({
        type: 'ADD_TEXT_TO_SURFACE',
        payload: { ...item, id }
    })
}

const handleEmoji = (item, focusDispatch) => {

    const id = nanoid(10);

    focusDispatch({
        type: "ADD_EMOJI_TO_SURFACE",
        payload: { ...item, id }
    })

}

export default function Surface() {


    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: [ItemTypes.BG_IMAGE, ItemTypes.TEXT, ItemTypes.EMOJI],
        drop: (item) => handleDropItem(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })

    }))

    const [background, setBackground] = useState(false);
    const { surfaceTextList, surfaceEmojiList, focusDispatch } = useContext(FocusContext);
    const [sizeState] = useContext(SizeContext);
    const { width, height } = sizeState;
    console.log(sizeState);


    const handleDropItem = (item) => {

        if (item.type === "BG_IMAGE") {
            handleBackgroundImage(item, background, setBackground);
        }
        else if (item.type === "TEXT") {
            handleText(item, focusDispatch);
        }
        else if (item.type === "EMOJI") {
            handleEmoji(item, focusDispatch)
        }

    }




    return (
        <Box sx={{ width: '100%', height: '100%', overflow: 'scroll', }}>
            <Box className="surface" ref={drop} sx={{
                position: 'relative',
                width: `${width}px`, height: `${height}px`, backgroundColor: 'common.white',
                boxShadow: 2,
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: '6rem 2rem'
            }}>
                {
                    // surafce texts
                    surfaceTextList.length > 0 && surfaceTextList.map((text) => (
                        <SurfaceText key={text.id} text={text} />
                    ))
                }
                {
                    // surface emojis
                    surfaceEmojiList.length > 0 && surfaceEmojiList.map((emoji) => (
                        <SurfaceEmoji key={emoji.id} emoji={emoji} />
                    ))
                }
            </Box>
            <DeleteSurfaceItem />
        </Box>
    )
}