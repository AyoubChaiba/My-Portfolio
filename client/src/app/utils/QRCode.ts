import * as htmlToImage from 'html-to-image';
import { RefObject } from 'react';

export const DownloadQRCode = (qrRef: RefObject<HTMLDivElement>) => {
    if (qrRef.current) {
        htmlToImage.toPng(qrRef.current)
        .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = 'AyoubCh-QR.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(() => {
            console.error('Failed to generate QR code image');
        });
    }
};
