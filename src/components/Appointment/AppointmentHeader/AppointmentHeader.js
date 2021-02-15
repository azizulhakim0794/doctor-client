import React from 'react';
import chair from '../../../image/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleSelectedDate},{date}) => {
    return (
        
        <div>
            <main className="container">
                <div style={{ height: '600px' }} className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-4 offset-md-1">
                        <h1 style={{ color: '#3A4256' }}>Appointment</h1>
                        <Calendar
                            onChange={handleSelectedDate}
                            value={date}
                        />
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <img src={chair} alt="" className="img-fluid" />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;