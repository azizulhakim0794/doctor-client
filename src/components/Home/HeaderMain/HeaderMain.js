import React from 'react';
import { useHistory } from 'react-router-dom';
import chair from '../../../image/chair.png'


const HeaderMain = () => {
    const history = useHistory()
    const appointment = ()=>{
        history.push('/appointment')
    }
    return (
        <main className="container">
        <div style={{height:'600px'}} className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New smile <br/> starts here </h1>
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, recusandae eveniet? Eos a deserunt animi itaque laborum fuga porro aspernatur modi, eveniet, dicta doloribus aliquam, ratione magnam architecto assumenda! Praesentium.
                </p>
                <button className="btn btn-mix" onClick={appointment}>GET APPOINTMENT</button>
            </div>
            <div className="col-md-6 offset-md-1">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </div>
        </main>
    );
};

export default HeaderMain;