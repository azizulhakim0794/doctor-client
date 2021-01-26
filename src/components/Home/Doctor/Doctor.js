import React from 'react';
import doctor from '../../../image/doctor-sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = () => {
    return (
        <div className="col-md-4">
            <div>
                <img className="img-fluid" src={doctor} alt=""/>
            </div>
            <div className="text-center">
                <h3>Dr.Amir Khan</h3>
                <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-131-78493</p>
            </div>
        </div>
    );
};

export default Doctor;