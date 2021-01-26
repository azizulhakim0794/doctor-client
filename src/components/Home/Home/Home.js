import React from 'react';
import Appointment from '../Appointment/Appointment';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Exceptional from './Exceptional/Exceptional';
import './Home.css'



const Home = () => {
   
    return (
        <div>
            <Header/>
            <Services/>
            <Exceptional/>
            <Appointment/>
            <Testimonials/>
            <Blogs/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
