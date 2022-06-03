import { Typography } from "@mui/material";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../itemTypes";



export default function ShowText({ text }) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TEXT,
        item: { text: text.text, size: text.size, weight: text.weight, type: "TEXT" },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId()
        })
    }))

    return (
        <Typography ref={drag} fontSize={text.size} fontWeight={text.weight} sx={{ backgroundColor: 'grey.900', padding: '0.7rem 0.5rem', borderRadius: 1, '&:hover': { backgroundColor: 'grey.700' }, cursor: 'pointer', color: isDragging ? 'grey.700' : 'common.white' }}>
            {text.text}
        </Typography>
    )
}