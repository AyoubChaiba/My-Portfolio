import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import QRCode from "react-qr-code";
import { DialogQRProps } from '../../../types/componentType';
import { useRef } from "react";
import { DownloadQRCode } from "../../../utils/QRCode";

const ModalDialogQR: React.FC<DialogQRProps> = ({ open, onClose, link }) => {
    const qrRef = useRef<HTMLDivElement>(null);

    const handleDownload = () => {
        DownloadQRCode(qrRef);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle align='center'>Share this page</DialogTitle>
            <DialogContent>
                <div ref={qrRef}>
                    <QRCode value={link} />
                </div>
            </DialogContent>
            <DialogActions sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                }}>
                <Button onClick={handleDownload} color="primary">
                    Download
                </Button>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalDialogQR;