import React from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    return (
        <div className="top-margin container">
            <h4 className="text-mix text-center">OUR DOCTORS</h4>
            <div className="row d-flex justify-content-center">
                <Doctor/>
                <Doctor/>
                <Doctor/>
            </div>
        </div>
    );
};

export default Doctors;