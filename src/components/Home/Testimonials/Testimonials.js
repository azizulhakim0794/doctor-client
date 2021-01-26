import React from 'react';
import './Testimonials.css'
import ema from '../../../image/Juta.png'
import Imran from '../../../image/Imran.png'
import Testimonial from '../Testimonial/Testimonial';
const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Imran Khan',
        from : 'California',
        img : Imran,
        id:'03'
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema,
        id:'02'
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Imran Khan',
        from : 'California',
        img : Imran,
        id:'01'
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
        <div className="container">
            <div className="section-header">
                <h5 className="text-mix text-uppercase">Testimonial</h5>
                <h1>What Our Patients <br/> Says </h1>
            </div>
            <div className="card-deck mt-5">
                 {
                     testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.id}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Testimonials;