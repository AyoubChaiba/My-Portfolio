import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    IconButton,
    Typography,
    Stack,
} from "@mui/material";
import { FaLink, FaGithub, FaXmark } from "react-icons/fa6";
import { urlFor } from "../../../sanityClient";
import { ContentGrid } from '../Content/ContentGrid';
import { Gallery } from 'react-grid-gallery';
import { ModalDialogProps } from "../../../types";
import "./ModalDialog.scss"
import MainButton from '../Button/MainButton';


const ModalDialog = ({ openDialog, handleCloseDialog, currentProject }: ModalDialogProps) => {
    return (
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
            fullWidth
            maxWidth='xl'
        >
            {currentProject && (
                <>
                    <DialogTitle sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        border: 'none',
                        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                    }}
                    >
                        {currentProject.title}
                        <IconButton
                            onClick={handleCloseDialog}
                            edge="end"
                            aria-label="close"
                            sx={{
                                position: "absolute",
                                top: 12,
                                right: 25,
                                width: 35,
                                height: 35,
                                fontSize: 18,
                                color: "#121212",
                                "&:hover": {
                                    color: "#1976d2",
                                },
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
                            display: 'flex',
                            justifyContent: 'center',
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
                            }
                        }} >
                            <img
                                src={urlFor(currentProject.photo[0].asset).url()}
                                alt={currentProject.title}
                            />
                        </Box>
                        {
                            currentProject.photo.length > 1 && (
                                <ContentGrid title="Gallery" classContent="gallery title_dialog">
                                    <Gallery
                                        images={
                                            currentProject.photo.slice(1).map(photo => ({
                                                src: urlFor(photo.asset).url(),
                                                width: 800,
                                                height: 600,
                                            }))
                                        }
                                        enableImageSelection={false}
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
                                sx={{ margin: 3, justifyContent: 'center', gap: 2 , flexDirection: { xs : 'column' } }}
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
        </Dialog>
    )
}

export default ModalDialog;
