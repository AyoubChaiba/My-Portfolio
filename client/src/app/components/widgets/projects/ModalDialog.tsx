import { useState } from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    Typography,
    Stack,
    DialogTitle,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { FaLink, FaGithub, FaXmark } from "react-icons/fa6";
import { urlFor } from "../../../sanityClient";
import { ContentGrid } from '../Content/ContentGrid';
import { Gallery } from 'react-grid-gallery';
import Lightbox from "yet-another-react-lightbox";
import { ModalDialogProps } from "../../../types/componentType";
import "./ModalDialog.scss";
import { MainButton } from '../../common/Button/MainButton';
import 'yet-another-react-lightbox/styles.css';

const ModalDialog = ({ openDialog, handleCloseDialog, currentProject }: ModalDialogProps) => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
            maxWidth='md'
            fullScreen={fullScreen}
            className="modal-dialog"
        >
            {currentProject && (
                <>
                    <DialogTitle
                        sx={{
                            position: 'relative',
                            border: 'none',
                            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                            height: '70px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            color="initial"
                            fontWeight={{ xs: 600, sm: 800, md: 900 }}
                            fontSize={{ xs: 14, sm: 16, md: 22 }}
                        >
                            {currentProject.title}
                        </Typography>
                        <IconButton
                            onClick={handleCloseDialog}
                            edge="end"
                            aria-label="close"
                            sx={{
                                position: "absolute",
                                top: 16,
                                right: 30,
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
                    <DialogContent
                        dividers
                        sx={{
                            border: "none",
                            padding: 0,
                        }}
                    >
                        {currentProject.photo.length > 1 && (
                            <ContentGrid title="Gallery" classContent="gallery title_dialog" updateNull={true}>
                                <Gallery
                                    images={
                                        currentProject.photo.map((photo) => ({
                                            src: urlFor(photo.asset).url(),
                                            width: photo.width || 0,
                                            height: photo.height || 0,
                                        }))
                                    }
                                    enableImageSelection={false}
                                    onClick={(index) => handleImageClick(index)}
                                />
                            </ContentGrid>
                        )}
                        <ContentGrid title="About Project" classContent="about_project title_dialog" updateNull={true}>
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
                                sx={{ margin: 3, justifyContent: 'center', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}
                            >
                                <MainButton
                                    icon={<FaGithub />}
                                    text="GitHub"
                                    link={currentProject.github}
                                    className="btn-dialog-github"
                                />
                                <MainButton
                                    icon={<FaLink />}
                                    link={currentProject.link}
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
