import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../itemTypes";


const Item = styled('span')(({ theme }) => ({
    cursor: 'grab',
    backgroundColor: theme.palette.grey[800],
    fontSize: '30px',
}));

export default function EmojiTemplate({ emoji }) {


    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.TEXT,
        item: { ...emoji, size: '30px', type: "EMOJI" },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId()
        })
    }))



    return (
        <Grid xs={3} item>
            <Item ref={drag}>
                {
                    !isDragging && `${emoji.character}`
                }
            </Item>
        </Grid>
    )
}