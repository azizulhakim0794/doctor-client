import React from 'react';
import BookCard from '../BookCard/BookCard';
import './BookAppointment.css'

const bookings = [
    {
        id: '01',
        subject: 'teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpaces:'10 SPACES AVAILABLE'
    },
    {
        id: '02',
        subject: 'Cavity Protection',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpaces:'10 SPACES AVAILABLE'
    },
    {
        id: '03',
        subject: 'teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpaces:'10 SPACES AVAILABLE'
    },
    {
        id: '04',
        subject: 'teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpaces:'10 SPACES AVAILABLE'
    },
    {
        id: '05',
        subject: 'teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpaces:'10 SPACES AVAILABLE'
    },
    {
        id: '06',
        subject: 'teeth Orthodontics',
        visitingHours: '8:00 AM - 9:00 PM',
        totalSpaces:'10 SPACES AVAILABLE'
    },

]
const BookAppointment = ({ date }) => {
    return (
        <div>
            <h2 className="text-center text-mix">Available Appointments on {date.toDateString()}</h2>
            <div className="d-flex justify-content-center">
            <div className="container row d-flex justify-content-center mb-2">
                {
                    bookings.map((booking=><BookCard booking={booking} date={date} key={booking.id}/>))
                }
            </div>
            </div>
        </div>
    );
};

export default BookAppointment;