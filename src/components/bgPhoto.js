import { ImageListItem } from "@mui/material";
import Image from "next/image";
import { ItemTypes } from "../itemTypes";
import { useDrag } from "react-dnd";



export default function BgPhoto({ photo }) {

    const { alt_description, urls } = photo;

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BG_IMAGE,
        item: { photo },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId()
        })
    }))


    return (
        <ImageListItem ref={drag} sx={{ cursor: 'pointer' }}>
            <Image
                alt={alt_description}
                src={urls.regular}
                width={300}
                height={200}
            />
        </ImageListItem>
    )
}