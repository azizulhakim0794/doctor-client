import React, { useState } from 'react';
import Footer from '../../CommonComponent/Footer/Footer';
import NavBar from '../../CommonComponent/NavBar/NavBar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

import './Appiontment.css'
  

const Appiontment = () => {
    const [selectedDate , SetSelectedDate] = useState(new Date())
    const handleSelectedDate = data => {
        SetSelectedDate(data)
      
    }
    return (
        <div>
           <NavBar/>
            <AppointmentHeader handleSelectedDate={handleSelectedDate} date={selectedDate}/>
            <BookAppointment date={selectedDate}/>
            <Footer/>
        </div>
    );
};

export default Appiontment;