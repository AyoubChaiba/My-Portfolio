import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { Typography } from "@mui/material";
import { WorkingProps } from "../../../types";



export const TimelineInfo: React.FC<WorkingProps> = ({ company, position, dates, description }) => {
    return (
        <TimelineItem className='timeline-item'>
            <TimelineSeparator className='timeline-separator'>
                <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                <TimelineConnector className='timeline-connector' />
            </TimelineSeparator>
            <TimelineContent
                sx={{
                    marginBottom: "20px",
                }}
            >
                <Typography
                    variant="h6"
                    color="initial"
                    sx={{
                        fontSize: { xs: '12px', sm: '13px', md: '14px' },
                        fontWeight: 'bold',
                        lineHeight: '1.5',
                        textTransform: 'uppercase',
                        letterSpacing: '0.025em',
                        marginTop: "-12px",
                        "& span": {
                            color: "#232323"
                        }
                    }}
                    className='timeline-titel'
                >
                    {position} - <span>{company}</span>
                </Typography>
                <Typography variant="caption" color="black" className='timeline-description'>{dates}</Typography>
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