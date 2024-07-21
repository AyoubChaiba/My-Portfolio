import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import { Typography, IconButton } from '@mui/material';
import { TimelineResumeProps } from "../../../types/componentType";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";

export const TimelineInfoResume: React.FC<TimelineResumeProps> = ({ name, subName, dates, description, location }) => {
    return (
        <TimelineItem className={`timeline-item timeline_info_resume`}>
            <TimelineSeparator className='timeline-separator'>
                <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    padding: "20px 16px",
                    textAlign: "left",
                    marginBottom: "25px",
                    marginTop: "-35px",
                }}
            >
                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        fontSize: { xs: '0.7em', sm: '0.8em', md: '0.9em' },
                        fontWeight: 'bold',
                        lineHeight: '2',
                        textTransform: 'capitalize',
                        letterSpacing: '0.030em',
                        marginTop: "-12px",
                    }}
                    className='timeline-titel'
                >
                    {name}
                </Typography>
                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        fontSize: { xs: '0.65em', sm: '0.75em', md: '0.85em' },
                        fontWeight: 'bold',
                        lineHeight: '1.5',
                        textTransform: 'uppercase',
                        letterSpacing: '0.025em',
                        color: "#1565c0"
                    }}
                    className='timeline-titel'
                >
                    {subName}
                </Typography>
                <Typography variant="caption" color="black" className='timeline-description'
                    sx={{
                        marginRight: "10px",
                    }}
                    >
                    <IconButton size="small" sx={{
                        color: "#373A40",
                        width: "19px",
                        height: "20px",
                        marginTop : "-4px",
                        marginLeft: "-5px",
                    }} >
                        <FaCalendarDays />
                    </IconButton>
                    {dates}
                </Typography>
                <Typography variant="caption" color="black" className='timeline-description'>
                    <IconButton size="small" sx={{
                        color: "#373A40",
                        width: "19px",
                        height: "20px",
                        marginTop : "-4px",
                    }} >
                        <FaLocationDot />
                    </IconButton>
                    {location}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    paddingY={2}
                    className='timeline-description'
                    sx={{
                        fontSize: "12px",
                        padding: "4px 0" ,
                    }}
                    >
                    {description}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
};