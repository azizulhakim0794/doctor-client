import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SlideBar from '../../CommonComponent/SlideBar/SlideBar';
import { UserContext } from '../../../App';
const Dashbord = () => {
    const [loggedInUser , setLoggedInUser] =  useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleSelectedDate = date => {
        setSelectedDate(date)
    }
    console.log(selectedDate)
    useEffect(() => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate , email:loggedInUser.email})
        })
            .then(res => res.json())
            .then((data) => setAppointments(data))
    }, [selectedDate])
    return (
        <div className="">
            <div className="container-fluid row">
                <div className="col-md-3">
                    <SlideBar />
                </div>
                <div className="col-md-4">
                    <Calendar
                        onChange={handleSelectedDate}
                        value={selectedDate}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments} />
                </div>
            </div>
        </div>
    );
};

export default Dashbord;