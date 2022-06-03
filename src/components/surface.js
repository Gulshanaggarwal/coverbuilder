import { Box } from "@mui/system";
import { ItemTypes } from "../itemTypes";
import { useDrop } from "react-dnd";
import { useState } from "react";
import { nanoid } from "nanoid";
import SurfaceText from "./surfaceText";


const handleBackgroundImage = (item, background, setBackground) => {



    const { photo } = item;
    const { url } = photo;

    setBackground(url);
    return;
}

const handleText = (item, texts, setTexts) => {

    const id = nanoid(10);

    const data = { id, fontSize: item.size, fontWeight: item.weight, text: item.text }
    setTexts((existingItems) => [...existingItems, data]);



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
    const [texts, setTexts] = useState([]);

    console.log(texts);

    const handleDropItem = (item) => {

        if (item.type === "BG_IMAGE") {
            handleBackgroundImage(item, background, setBackground);
        }
        else if (item.type === "TEXT") {
            handleText(item, texts, setTexts);
        }

    }



    const isActive = canDrop && isOver
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', margin: '1rem 0', }}>
            <Box className="surface" ref={drop} sx={{
                width: '40%', height: '60%', backgroundColor: 'common.white',
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
                    texts.length > 0 && texts.map((item) => (
                        <SurfaceText key={item.id} text={item} />
                    ))
                }
            </Box>
        </Box>
    )
}