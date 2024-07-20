import React, { useState } from "react";
import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Typography,
    Stack,
} from "@mui/material";
import { FaLink, FaGithub, FaXmark } from "react-icons/fa6";
import { urlFor } from "../../../sanityClient";
import { ContentGrid } from '../Content/ContentGrid';
import { Gallery } from 'react-grid-gallery';
import Lightbox from "yet-another-react-lightbox";
import { ModalDialogProps } from "../../../types";
import "./ModalDialog.scss";
import MainButton from '../Button/MainButton';
import 'yet-another-react-lightbox/styles.css';

const ModalDialog = ({ openDialog, handleCloseDialog, currentProject }: ModalDialogProps) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };

    const images = currentProject?.photo.map(photo => urlFor(photo.asset).url()) || [];

    return (
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            fullWidth
            maxWidth='lg'
            className="modal-dialog"
            classes={{ paper: "modal-paper" }}
            disableScrollLock={true}
            disableEscapeKeyDown={true}
        >
            {currentProject && (
                <>
                    <DialogTitle sx={{
                        position: 'relative',
                        border: 'none',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                        height: '50px',
                    }}
                    >
                        <IconButton
                            onClick={handleCloseDialog}
                            edge="end"
                            aria-label="close"
                            sx={{
                                position: "absolute",
                                top: 7,
                                right: 25,
                                width: 35,
                                height: 35,
                                fontSize: 18,
                                color: "#121212",
                                border: "1px solid #ccc",
                            }}
                        >
                            <FaXmark />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers
                        sx={{
                            border: "none",
                            padding: 0 ,
                        }}>
                        <Box sx={{
                            maxWidth: "800px",
                            width: "100%",
                            maxHeight: "500px",
                            paddingX: "27px" ,
                            margin: "15px auto",
                            overflow: "hidden",
                            "& img": {
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                cursor: 'pointer',
                            }
                        }} >
                            <Typography
                                variant="h4"
                                color="initial"
                                fontWeight={900}
                                margin={"25px auto"}
                                align="center"
                                >
                                {currentProject.title}
                            </Typography>
                            <img
                                src={urlFor(currentProject.photo[0].asset).url()}
                                alt={currentProject.title}
                                onClick={() => handleImageClick(0)}
                            />
                        </Box>
                        {
                            currentProject.photo.length > 1 && (
                                <ContentGrid title="Gallery" classContent="gallery title_dialog">
                                    <Gallery
                                        images={
                                            currentProject.photo.slice(1).map((photo) => ({
                                                src: urlFor(photo.asset).url(),
                                            }))
                                        }
                                        enableImageSelection={false}
                                        onClick={(index) => handleImageClick(index + 1)}
                                        rowHeight={250}

                                    />
                                </ContentGrid>
                            )
                        }
                        <ContentGrid title="About Project" classContent="about_project title_dialog">
                            <Typography variant="body2" gutterBottom align="center" marginBottom={4}>
                                {currentProject.description}
                            </Typography>
                            <Typography variant="body2" color="#1976d2" gutterBottom align="center" fontWeight={500}>
                                Stack: <Typography variant="caption" color="#121212" fontWeight={500}>{currentProject.stack}</Typography>
                            </Typography>
                            <Typography variant="body2" color="#1976d2" gutterBottom align="center" fontWeight={500}>
                                Client: <Typography variant="caption" color="#121212" fontWeight={500}>{currentProject.client}</Typography>
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                className="btn-container"
                                sx={{ margin: 3, justifyContent: 'center', gap: 2 , flexDirection: { xs : 'column' , sm : 'row' } }}
                            >
                                <MainButton
                                    icon={<FaGithub />}
                                    text="GitHub"
                                    className="btn-dialog-github"
                                />
                                <MainButton
                                    icon={<FaLink />}
                                    text="Live Site"
                                    className="btn-dialog-live"
                                />
                            </Stack>
                        </ContentGrid>
                    </DialogContent>
                </>
            )}
            <Lightbox
                open={isLightboxOpen}
                close={() => setIsLightboxOpen(false)}
                slides={images.map(src => ({ src }))}
                index={currentImageIndex}
            />
        </Dialog>
    );
}

export default ModalDialog;
