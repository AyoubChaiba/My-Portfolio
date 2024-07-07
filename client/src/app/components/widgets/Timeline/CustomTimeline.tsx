import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography'
import { TimelineProps } from '../../../types';
import "./timeline.scss"


const CustomTimeline: React.FC<TimelineProps> = ({ title, icon, children, style  }) => {
    return (
        <Timeline className='timeline'>
            <TimelineItem
                className='timeline-item-header'
                sx={{
                    minHeight: style.headHeight || 0 ,
                }}
                >
                <TimelineSeparator className='timeline-separator'>
                    <TimelineDot  color="primary"
                        sx={{
                            width: style?.sizeIcon,
                            height: style?.sizeIcon,
                            marginTop: style?.headIconTop,
                            "& svg": {
                                width: '25px',
                                height: '25px',
                            },
                            marginLeft: style?.marginLeft,
                        }}
                        className='timeline-dot'
                        >
                        {icon}
                    </TimelineDot >
                    <TimelineConnector
                        sx={{
                            marginLeft: style?.marginLeft,
                        }}
                        className='timeline-connector'
                        />
                </TimelineSeparator>
                <TimelineContent >
                    <Typography
                        variant='h6'
                        lineHeight={3.3}
                    >{title}</Typography>
                </TimelineContent>
            </TimelineItem>
                {children}
        </Timeline>
    );
}

export default CustomTimeline;
