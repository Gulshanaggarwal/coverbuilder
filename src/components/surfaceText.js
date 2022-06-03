import { Box } from "@mui/system";
import { useState } from "react";
import { Resizable } from "re-resizable";



export default function SurfaceText({ text }) {

    const [color, setColor] = useState('black');

    const handleFocus = () => {
        setColor('green');
    }
    return (
        <Resizable defaultSize={{
            width: '80%',
            height: '100px'
        }}>
            <Box onFocus={handleFocus} component="div" key={text.id} fontSize={text.fontSize} fontWeight={text.fontWeight} sx={{ outlineColor: 'primary.main', backgroundColor: 'none', color: color, width: '100%', height: '100%' }} contentEditable={true} suppressContentEditableWarning={true}>{text.text} </Box>
        </Resizable>
    )
}