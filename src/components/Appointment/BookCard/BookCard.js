import React, { useState } from 'react';
import BookForm from '../BookForm/BookForm';
import './BookCard.css'

const BookCard = ({ booking, date }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (

        <div className="col-md-4 d-flex mt-5">
            <div className="text-center">
                <div className="card-body">
                    <h3 className="card-title text-mix">{booking.subject}</h3>
                    <h4 className="card-text">{booking.visitingHours}</h4>
                    <p className="text-secondary">{booking.totalSpaces}</p>
                    <button className="btn btn-mix"onClick={openModal}>BOOK APPOINTMENT</button>
                    <BookForm date={date} modalIsOpen={modalIsOpen} title={booking.subject} closeModal={closeModal}/>
                </div>
            </div>
        </div>

    );
};

export default BookCard;