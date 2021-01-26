import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'
const InfoCard = ({ info }) => {
  return (
<>

        <div className="ml-3  border-0 col-md-3 text-white ">
      <div className="row justify-content-center">
        <div className={` d-flex info-container info-${info.background}`}>
        <div className="col-md-3 d-flex align-items-center">
        <FontAwesomeIcon className="info-icon " icon={info.icon} />
         </div>
         <div className="col-md-9">
           
             <h5 className="">{info.title}</h5>
             <p className="">{info.description}</p>
          
         </div>
         </div>
       </div> 
      </div>
</>
  );
};

export default InfoCard;