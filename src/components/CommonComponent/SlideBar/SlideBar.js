import React, { useContext, useEffect, useState } from 'react';
import './SlideBar.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSignOutAlt, faNotesMedical, faCalendarWeek,faUserPlus ,faUsers, faTh } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';
const SlideBar = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [isDoctor , setIsDoctor] = useState(false)
    useEffect( () => {
        fetch('http://localhost:5000/isDoctor',{
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({email:loggedInUser.email})
        })
        .then((res) =>res.json())
        .then(data =>{
            setIsDoctor(data)
        })
    },[])
    return (
        <div className="full-slideBar">

            <br />
            <br />
            <br />
            <Link to="/dashboard" className="text-white">
                <div className="dashBtn col-md-12">
                    <FontAwesomeIcon icon={faTh} /> Dashboard
                </div>
            </Link>
            {isDoctor && <div>
                <div className="dashBtn col-md-12">
                <FontAwesomeIcon icon={faCalendarWeek} />  Appointment
            </div>
            <Link to="/dashboard/allpatients" className="text-white">
                <div className="dashBtn col-md-12">
                    <FontAwesomeIcon icon={faUsers} />  Patients
                </div>
            </Link>
            <Link to="/dashboard/addDoctors" className="text-white">
                <div className="dashBtn col-md-12">
                    <FontAwesomeIcon icon={faUserPlus} />  Add Doctors
                </div>
            </Link>
            <div className="dashBtn col-md-12">
                <FontAwesomeIcon icon={faNotesMedical} />  Prescription
                </div>
            <div className="dashBtn col-md-12">
                <FontAwesomeIcon icon={faCog} />  Settings
            </div>
            </div> 
            }
            {
                !isDoctor &&
                <div>
                    <br/>
                    <br/><br/>
                    <br/><br/><br/><br/><br/><br/><br/>
                </div>
            }
            <br /><br /><br /><br /><br /><br />
            <div className="dashBtn col-md-12">
                <FontAwesomeIcon icon={faSignOutAlt} />  Logout
                </div>

        </div>
    );
};

export default SlideBar;