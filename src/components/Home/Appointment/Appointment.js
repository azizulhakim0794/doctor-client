import React from 'react';
import './Appointment.css'
import doctor from '../../../image/doctor.png'
const Appointment = () => {
    return (
        <div className="appointment-full top-margin">
        <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="appointment-img img-fluid" src={doctor} alt=""/>
                    </div>
                    <div className="col-md-6 appointment-text text-white">
                        <h6 className="text-mix">APPOINTMENT</h6><br/>
                        <h1>Make an appointment <br/> Today</h1>
                        <br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestiae enim, aperiam a nobis cupiditate odit et delectus sapiente est. Libero, optio! Et totam porro voluptate repellat fugiat eos magnam?
                        </p>
                        <br/>
                        <button className="btn btn-mix">Learn More</button>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Appointment;