import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import { Typography, IconButton, Avatar } from '@mui/material';
import { TimelineResumeProps } from "../../../types/componentType";
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";

export const TimelineInfoResume: React.FC<TimelineResumeProps> = ({ name, subName, dates, description, location, logo }) => {
    return (
        <TimelineItem className={`timeline-item timeline_info_resume`}>
            <TimelineSeparator className='timeline-separator'>
                <TimelineDot variant="outlined" className='timeline-dot' color="primary" >
                    <Avatar alt="Remy Sharp" src={logo}
                        sx={{
                            width : {xs : 20 , sm : 25 , md : 30} ,
                            height : {xs : 20 , sm : 25 , md : 30}
                        }}
                        />
                </TimelineDot>
                <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    padding: "18px 16px",
                    marginBottom: "13px",
                    marginTop: "-17px",
                }}
            >
                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        fontSize: { xs: '0.71em', sm: '0.81em', md: '0.91em' },
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                        letterSpacing: '0.030em',
                        marginTop: "-12px",
                        marginBottom: "6px",
                    }}
                    className='timeline-titel'
                >
                    {name}
                </Typography>
                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        fontSize: { xs: '0.64em', sm: '0.72em', md: '0.74em' },
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