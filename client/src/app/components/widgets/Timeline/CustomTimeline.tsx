import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Typography from '@mui/material/Typography'
import { CustomTimelineProps } from '../../../types/index.ts';
import "./timeline.scss"


const CustomTimeline: React.FC<CustomTimelineProps> = ({ title, icon, children, style, className }) => {
    return (
        <Timeline className={`timeline ${className}`} >
            <TimelineItem
                className='timeline-item-header'
                sx={{
                    minHeight: style.headHeight || 0 ,
                }}
                >
                <TimelineSeparator className='timeline-separator'>
                    <TimelineDot  color="primary"
                        sx={{
                            width: {
                                xs : style?.sizeIcon - 20 ,
                                sm : style?.sizeIcon - 15 ,
                                md : style?.sizeIcon ,
                            },
                            height: {
                                xs : style?.sizeIcon - 20 ,
                                sm : style?.sizeIcon - 15,
                                md : style?.sizeIcon ,
                            },
                            marginTop: style?.headIconTop,
                            "& svg": {
                                width: {
                                    xs : 18,
                                    sm : 20,
                                    md : 25,
                                },
                                height: {
                                    xs : 18,
                                    sm : 20,
                                    md : 25,
                                },
                            },
                            marginLeft: {
                                xs : `${style?.marginLeft + 9}px`,
                                sm : `${style?.marginLeft + 8}px`,
                                md : `${style?.marginLeft}px`,
                            },
                        }}
                        className={`timeline-dot ${className}`}
                        >
                        {icon}
                    </TimelineDot >
                    <TimelineConnector
                        sx={{
                            marginLeft: {
                                xs : `${style?.marginLeft + 10}px`,
                                sm : `${style?.marginLeft + 7}px`,
                                md : `${style?.marginLeft}px`,
                            },
                        }}
                        className={`timeline-connector ${className}`}
                        />
                </TimelineSeparator>
                <TimelineContent >
                    <Typography
                        variant='h6'
                        lineHeight={3.8}
                        fontWeight={{
                            xs : 500,
                            sm : 500,
                            md : 600,
                        }}
                        fontSize={{ xs: '14px', sm: '16px', md: '18px' }}
                        >
                        {title}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
                {children}
        </Timeline>
    );
}

export default CustomTimeline;
