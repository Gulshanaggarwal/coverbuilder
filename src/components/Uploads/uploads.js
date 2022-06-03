import { Box } from "@mui/system"
import { SearchContext } from "../../contexts/searchContext";
import { useContext, useEffect, useState } from "react";
import { handleChange } from "../Search/search";
import { Button, ImageList } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import storage from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import BgPhoto from "../bgPhoto";
import { nanoid } from "nanoid";

const supportedTypes = ["image/jpg", "image/jpeg", "image/png"];
const MAX_SIZE = 10485760 // 10bytes

export default function Uploads() {

    const [state, dispatch] = useContext(SearchContext);
    const [UploadedImages, setImages] = useState(() => {
        const data = JSON.parse(window.localStorage.getItem('Uploads'));
        if (data) return data;
        return [];
    })
    console.log(UploadedImages);

    useEffect(() => {
        //make empty searchBar
        handleChange("", dispatch);

    }, [])

    const Input = styled('input')({
        display: 'none',
    });


    const handleFileChange = (e) => {

        const file = e.target.files[0];

        if (!file) {
            alert("Please select a file!");
            return;
        }
        else if (!supportedTypes.includes(file.type)) {
            alert("Only JPG & PNG files are supported!");
            return;
        }
        else if (file.size > MAX_SIZE) {
            alert("File size cannot exceed than 10 MB!");
            return;
        }

        // Upload File

        const storageRef = ref(storage, `Uploads/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', (snapshot) => {

            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            switch (snapshot.state) {
                case "paused":
                    alert("Upload Paused!");
                    break;
                case "running":
                    alert("Hang on, file upload in porgress!");
                    break;
            }

        },
            // handleError
            (error) => {
                console.log(error);
                alert("Error couldn't upload try again!")
            },
            // handleSuccessful upload
            () => {
                alert("success");
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const value = { id: nanoid(10), url: downloadURL, alt_description: file.name }
                    const fetchLocalData = JSON.parse(localStorage.getItem("Uploads"));
                    const data = fetchLocalData ? fetchLocalData : [];
                    data.unshift(value);
                    localStorage.setItem("Uploads", JSON.stringify(data));
                    //render component;
                    setImages(data);
                })
            }
        )

    }

    return (
        <Box>
            <label htmlFor="contained-button-file">
                <Input onChange={handleFileChange} accept=".jpg,.jpeg,.png" id="contained-button-file" type="file" />
                <Button sx={{ width: '100%', margin: '1rem 0' }} variant="contained" component="span" endIcon={<PhotoCamera />}>
                    Upload
                </Button>
            </label>
            <ImageList sx={{ overflowY: 'scroll', overflowX: 'hidden' }} cols={2}>
                {
                    UploadedImages.length > 0 && UploadedImages.map((photo) => (
                        <BgPhoto key={photo.id} photo={photo} />
                    ))
                }
            </ImageList>
        </Box>
    )
}