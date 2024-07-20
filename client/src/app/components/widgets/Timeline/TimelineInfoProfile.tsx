import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Typography, Link as MUILink } from "@mui/material";
import { TimelineProfileProps } from "../../../types/index.ts";



const TimelineInfoProfile: React.FC<TimelineProfileProps> = ({ title, text, link }) => {
    return (
        <TimelineItem className={`timeline-item timeline_info_profile`}>
            <TimelineSeparator className='timeline-separator'>
                <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent>
                <Typography color="initial" className='timeline-text'>
                    {text ? (
                        <>{title}: <span>{text}</span></>
                    ) : (
                        <>{title}: <MUILink href={link?.url} underline="hover" target="_blank" rel="noopener noreferrer">@{link?.name}</MUILink></>
                    )}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineInfoProfile;