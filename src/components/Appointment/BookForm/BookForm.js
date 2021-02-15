import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const BookForm = ({ modalIsOpen, closeModal, title , date}) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        data.service = title;
        data.date = date;
        data.created = new Date();
        
        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
            
        })
        // console.log(data)
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                 alert('Appointment created successfully.');
            }
        })
        console.log(data)

        
    }

    // console.log(watch("example"));

    return (

        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-mix text-center">{title}</h2>
                <p className="text-secondary text-center"> <small>ON {date.toDateString()}</small></p>
                <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" className="form-control" placeholder="Your Name" ref={register} required />
                    <br />
                    <div className="form-group">
                        <input className="form-control" placeholder="Your Phone Number" name="phoneNumber" ref={register} required />
                    </div>

                    <input className="form-control" placeholder="Email" name="email" ref={register} required />
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    {/* ref={register({ required: true })  }*/}
                    <br />
                    <div className="form-group row">
                        <div className="col-md-4">
                        <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Your Age" name="age" ref={register} required />
                        </div>
                        <br />
                        <div className="col-md-4">
                            <input className="form-control " placeholder="Weight" name="weight" ref={register} required />
                        </div>
                        <br />
                    </div>
                    <input className="btn-mix" type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default BookForm;