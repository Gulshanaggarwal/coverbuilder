import { Box } from "@mui/system";
import { useState } from "react";
import { Rnd } from "react-rnd";






export default function SurfaceText({ text }) {

    const [border, setBorder] = useState(0);

    const handleFocus = () => {
        setBorder(2);
    }
    const handleBlur = () => {
        setBorder(0)
    }

    const handleOnResize = () => {
        setBorder(2);
    }

    const handleResizeStop = () => {
        setBorder(0);
    }


    return (
        <Rnd bounds="parent" onResize={handleOnResize} onResizeStop={handleResizeStop}  >
            <Box onFocus={handleFocus} onBlur={handleBlur} component="div" key={text.id} fontSize={text.fontSize} fontWeight={text.fontWeight} sx={{ outline: 'none', backgroundColor: 'none', width: '100%', height: '100%', border, borderColor: 'green' }} contentEditable={true} suppressContentEditableWarning={true}>{text.text} </Box>
        </Rnd >
    )
}