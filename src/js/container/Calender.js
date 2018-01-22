import React, { PropTypes } from 'react';
import axios from 'axios'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../../css/Calender.css';


const events = [
    {
        'title': 'Подія 1',
        'allDay': true,
        'start': new Date(2018, 22, 0),
        'end': new Date(2018, 22, 1)
    },
    {
        'title': 'Cлужба Божа 10:00',
        'start': new Date(2018, 0, 28),
        'end': new Date(2018, 0, 28)
    },
    {
        'title': 'Cлужба Божа 10:00',
        'start': new Date(2018, 1, 4),
        'end': new Date(2018, 1, 4)
    },
    {
        'title': 'Cлужба Божа 10:00',
        'start': new Date(2018, 1, 8),
        'end': new Date(2018, 1, 8)
    },
    {
        'title': 'DTS STARTS',
        'start': new Date(2018, 2, 13, 0, 0, 0),
        'end': new Date(2018, 2, 20, 0, 0, 0)
    },

    {
        'title': 'DTS ENDS',
        'start': new Date(2018, 10, 6, 0, 0, 0),
        'end': new Date(2018, 10, 13, 0, 0, 0)
    },

    {
        'title': 'Ще подія',
        'start': new Date(2018, 1, 9, 0, 0, 0),
        'end': new Date(2018, 1, 9, 0, 0, 0)
    },
    {
        'title': 'Конверенція',
        'start': new Date(2018, 0, 11),
        'end': new Date(2018, 0, 13),
        desc: 'Big conference for important people'
    },
    {
        'title': 'Біблійне коло Дім на скелі 19:00',
        'start': new Date(2018, 0, 24, 19, 0, 0, 0),
        'end': new Date(2018, 0, 24, 21, 0, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting'
    },
    {
        'title': 'Lunch',
        'start':new Date(2018, 3, 12, 12, 0, 0, 0),
        'end': new Date(2018, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch'
    },
    {
        'title': 'Meeting',
        'start':new Date(2018, 3, 12,14, 0, 0, 0),
        'end': new Date(2018, 3, 12,15, 0, 0, 0)
    },
    {
        'title': 'Happy Hour',
        'start':new Date(2018, 3, 12, 17, 0, 0, 0),
        'end': new Date(2018, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day'
    },
    {
        'title': 'Dinner',
        'start':new Date(2018, 3, 12, 20, 0, 0, 0),
        'end': new Date(2018, 3, 12, 21, 0, 0, 0)
    },
    {
        'title': 'Birthday Party',
        'start':new Date(2018, 3, 13, 7, 0, 0),
        'end': new Date(2018, 3, 13, 10, 30, 0)
    },
    {
        'title': 'Late Night Event',
        'start':new Date(2018, 3, 17, 19, 30, 0),
        'end': new Date(2018, 3, 18, 2, 0, 0)
    },
    {
        'title': 'Multi-day Event',
        'start':new Date(2018, 3, 20, 19, 30, 0),
        'end': new Date(2018, 3, 22, 2, 0, 0)
    }
];



class Calender extends React.Component {
    constructor(props) {
        super(props)
    }
    async componentDidMount() {
        /*const result = await axios.get('/getEvent')
        this.setState({
            news: answer
        });*/
    }
    render() {
        BigCalendar.setLocalizer(
            BigCalendar.momentLocalizer(moment)
        );
        return (
            <div className='calendercontainer'>
                <BigCalendar
                    events={events}
                    step={60}
                />
            </div>
        );
    }
}

export default Calender;