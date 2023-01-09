import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';



export default function CalendarGfg() {
    const [value, onChange] = useState(new Date());

    return (
        <div className='my-20 flex items-center justify-center'>
                <Calendar
                onChange={onChange}
                value={value}
                maxDate={new Date()}
            />
        </div>
    );
}