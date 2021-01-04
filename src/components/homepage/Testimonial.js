import React from 'react';
import Slider from "react-slick";

import { Testimonial_Data as TestimonialData } from '../../constants/TestimonialConstants';

import './testimonials.scss';

const TestimonialCard = ({ testimonialData }) => {
    return (
        <div className='testimonial-card'>
            <img src={testimonialData.user_img} className='testimonial-cover-img' />
            <div className='name'>  {testimonialData.name} </div>
            <div className='content'> <i>"{testimonialData.content}"</i></div>
        </div>
    )
}


const Testimonial = () => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1.1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className='card-wrapper-outer'>
            <h3 className='title'> Testimonials </h3>
            <Slider {...settings}>
                {
                    TestimonialData.map(elem => <TestimonialCard testimonialData={elem} key={elem.testimonial_id} />)
                }
            </Slider>
        </div>
    )
}

export default Testimonial
