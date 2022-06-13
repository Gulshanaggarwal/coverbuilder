import { Typography } from "@mui/material";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../itemTypes";



export default function ShowText({ text, padding }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TEXT,
        item: { ...text, type: "TEXT" },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId()
        })
    }))

    return (
        <Typography ref={drag} fontSize={text.size} fontWeight={text.weight} fontFamily={`"${text.font}",${text.family}`} sx={{ backgroundColor: 'grey.900', padding, borderRadius: 1, '&:hover': { backgroundColor: 'grey.700' }, cursor: 'grab', color: isDragging ? 'grey.700' : 'common.white', }}>
            {text.text}
        </Typography>
    )
}