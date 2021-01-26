import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container pt-5">
            <div className="container">
                <h5 className="text-center text-mix">Contact</h5>
                <h1 className="text-center text-white mt-3">Always Connect with us</h1><br />
                <div className="container">
                    <div className="mb-3 d-flex justify-content-center">
                        <input type="email" className="form-control col-md-9" id="exampleFormControlInput1" placeholder="Email address" />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">

                        <input type="email" className="form-control col-md-9 " id="exampleFormControlInput1" placeholder="Subject*" />
                    </div>
                    <div className="mb-3 d-flex justify-content-center">
                        <textarea className="form-control col-md-9" placeholder="Message*" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-mix">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;