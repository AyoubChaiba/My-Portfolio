import React from 'react';
import Calendar from 'react-github-contribution-calendar';
import { CalendarProps } from '../../../types';
import './calendarWrapper.scss';
import Typography from '@mui/material/Typography';


const CalendarWrapper: React.FC<CalendarProps> = ({ values, until, totalContributions }) => {

    const panelColors = [
        '#ebedf0',
        '#9be9a8',
        '#40c463',
        '#30a14e',
        '#216e39'
    ];

    return (
        <div className='github-calendar'>
            <Calendar
                values={values}
                until={until}
                weekLabelAttributes={{}}
                monthLabelAttributes={{}}
                panelAttributes={{}}
                panelColors={panelColors}
            />
            <Typography variant="body2" color="text.secondary" marginLeft={2}>Total Contributions: {totalContributions}</Typography>
        </div>
    );
};

export default CalendarWrapper;
