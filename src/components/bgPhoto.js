import { ImageListItem } from "@mui/material";
import Image from "next/image";
import { ItemTypes } from "../itemTypes";
import { useDrag } from "react-dnd";



export default function BgPhoto({ photo }) {

    const { url, alt_description } = photo;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BG_IMAGE,
        item: { photo, type: "BG_IMAGE" },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId()
        })
    }))


    return (
        <ImageListItem ref={drag} sx={{ cursor: 'pointer' }}>
            {
                !isDragging && <Image
                    alt={alt_description}
                    src={url}
                    width={300}
                    height={200}
                />
            }
        </ImageListItem>
    )
}