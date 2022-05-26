import { ImageListItem } from "@mui/material";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import Image from "next/image";



export default function BgPhoto({ photo }) {

    const { alt_description, urls } = photo;
    return (
        <ImageListItem sx={{ cursor: 'pointer' }}>
            <Image
                alt={alt_description}
                src={urls.regular}
                width={300}
                height={200}
            />
        </ImageListItem>
    )
}