import React, { useState } from 'react';
import './AddDoctors.css'
import SlideBar from '../../CommonComponent/SlideBar/SlideBar';

const AddDoctors = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value
        setInfo(newInfo)
        console.log(info)
    }
    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }
    const handleSubmit = e => {
        const fileData = new FormData()
        fileData.append('file', file)
        fileData.append('name', info.name)
        fileData.append('email', info.email)
        fetch('http://localhost:5000/addADoctor', {
            method: 'POST',
            body: fileData
        })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error=>{
                console.log(error)
            })
    }
    return (
        <div className="container-fluid row">
            <div className="col-md-3">
                <SlideBar />
            </div>
            <h3 className="text-mix">Add Doctors</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" onBlur={handleBlur} className="form-control" name="email" placeholder="Your Email" required />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Your Name</label>
                    <input type="text" onBlur={handleBlur} className="form-control" name="name" placeholder="Name" required />
                </div>
                <div>
                    Select image to upload: <br /><br />
                    <input type="file" onChange={handleFileChange} name="fileToUpload" id="fileToUpload" required />
                </div>
                <br /><br />
                <button type="submit" className="btn btn-mix">Submit</button>
            </form>
        </div>
    );
};

export default AddDoctors;