import { Box } from "@mui/system";
import { ItemTypes } from "../itemTypes";
import { useDrop } from "react-dnd";
import { useState } from "react";


const handleBackgroundImage = (item, background, setBackground) => {



    const { photo } = item;
    const { urls } = photo;

    const bgElement = <Box sx={{ backgroundImage: `url(${urls.regular})`, width: '100%', height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></Box>;

    setBackground(bgElement);
    return;
}

export default function Surface() {


    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BG_IMAGE,
        drop: (item) => handleDropItem(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })

    }))

    const [background, setBackground] = useState(false);

    const handleDropItem = (item) => {

        if (item.type === "BG_IMAGE") {
            handleBackgroundImage(item, background, setBackground);
        }

    }



    const isActive = canDrop && isOver
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', margin: '1rem 0', }}>
            <Box ref={drop} sx={{
                width: '40%', height: '60%', backgroundColor: 'common.white',
                boxShadow: 2,
                '&:hover': {
                    border: 2,
                    borderColor: 'primary.main'
                }
            }}>
                {
                    // background image
                    background
                }
            </Box>
        </Box>
    )
}