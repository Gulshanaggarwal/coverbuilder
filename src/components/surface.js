import { Box } from "@mui/system";
import { ItemTypes } from "../itemTypes";
import { useDrop } from "react-dnd";


export default function Surface() {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BG_IMAGE,
        drop: (item) => console.log(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })

    }))



    const isActive = canDrop && isOver
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', margin: '3rem 0', backgroundColor: 'primary.main' }}>
            <Box ref={drop} sx={{ width: '40%', height: '60%', backgroundColor: 'common.white', boxShadow: 2, }}>
                {isActive ? 'Release to drop' : 'Drag a box here'}
            </Box>
        </Box>
    )
}