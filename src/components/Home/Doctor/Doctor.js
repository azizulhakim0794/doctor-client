import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 ">
            <div className="d-flex justify-item-center">
            {
            doctor.image ? <img className="doctors-img" style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`}/>
            :
            <img  className="doctors-img" style={{height: '200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doctor.img}`} alt=""/>
        }
            </div>
            <div className="text-center">
                <h3>{doctor.name}</h3>
                <p><FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-131-78493</p>
            </div>
        </div>
    );
};

export default Doctor;