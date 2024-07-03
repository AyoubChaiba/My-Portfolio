import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { FaCircleUser } from "react-icons/fa6";
import Typography from '@mui/material/Typography'

const BasicTimeline = () => {
    return (
        <Timeline className='timeline'>   
            <TimelineItem className='timeline-item-header' >
                <TimelineSeparator className='timeline-separator'>
                    <TimelineDot  color="primary" className='timeline-dot'>
                        <FaCircleUser className='timeline-icon' />
                    </TimelineDot >
                    <TimelineConnector className='timeline-connector' />
                </TimelineSeparator>
            </TimelineItem>
            <TimelineItem className='timeline-item'>
                <TimelineSeparator className='timeline-separator'>
                    <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                    <TimelineConnector className='timeline-connector' />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography  color="initial" className='timeline-text'> Birthday: <span>06 December 1987</span></Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className='timeline-item'>
                <TimelineSeparator className='timeline-separator'>
                    <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                    <TimelineConnector className='timeline-connector' />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography color="initial" className='timeline-text' > Job: <span>Freelancer</span></Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem className='timeline-item'>
                <TimelineSeparator className='timeline-separator'>
                    <TimelineDot variant="outlined" className='timeline-dot' color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography color="initial" className='timeline-text' > Email: <span>henry@domain.com</span></Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default BasicTimeline;
