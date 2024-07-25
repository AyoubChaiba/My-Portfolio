import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Typography, Link as MUILink } from "@mui/material";
import { TimelineProfileProps } from "../../../types/componentType";

const TimelineInfoProfile: React.FC<TimelineProfileProps> = ({ title, text, link }) => {
    const isEmail = (value: string) => /\S+@\S+\.\S+/.test(value);
    const isPhoneNumber = (value: string) => /^\+?[1-9]\d{1,14}$/.test(value);

    return (
        <TimelineItem className={`timeline-item timeline_info_profile`}>
            <TimelineSeparator className='timeline-separator'>
                <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent className="timeline-info-content">
                <Typography color="initial" className='timeline-text'>
                    {text ? (
                        <>
                            {title}:{" "}
                            {isEmail(text) ? (
                                <MUILink href={`mailto:${text}`} underline="hover" target="_blank" rel="noopener noreferrer">{text}</MUILink>
                            ) : isPhoneNumber(text) ? (
                                <MUILink href={`tel:${text}`} underline="hover" target="_blank" rel="noopener noreferrer">{text}</MUILink>
                            ) : (
                                <span>{text}</span>
                            )}
                        </>
                    ) : (
                        <>{title}:{" "}<MUILink href={link?.url} underline="hover" target="_blank" rel="noopener noreferrer">@{link?.name}</MUILink></>
                    )}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
};

export default TimelineInfoProfile;
