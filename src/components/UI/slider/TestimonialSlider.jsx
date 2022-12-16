import React from 'react';
import Slider from 'react-slick';

import ava1 from '../../../assets/images/ava-1.jpg'
import ava2 from '../../../assets/images/ava-2.jpg'
import ava3 from '../../../assets/images/ava-3.jpg'

import '../../../style/TestimonialSlider.css'

const TestimonialSlider = () => {
    const setting = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Slider {...setting}>
            <div>
                <p className="review-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique aliquid neque fugit sapiente adipisci asperiores unde tenetur optio quis distinctio illo quasi, voluptates facere nemo doloribus magnam cum commodi.
                </p>
                <div className='slider-content d-flex align-items-center gap-4'>
                    <img src={ava1} alt="" className='w-25 rounded' />
                    <h6>Shimaskarter</h6>
                </div>
            </div>
            {/* <div>
                <p className="review-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique aliquid neque fugit sapiente adipisci asperiores unde tenetur optio quis distinctio illo quasi, voluptates facere nemo doloribus magnam cum commodi.
                </p>
                <div className='slider-content d-flex align-items-center gap-4'>
                    <img src={ava2} alt="" className='w-25 rounded' /> 
                    <h6>R.B isentor</h6>
                </div>
            </div>
            <div>
                <p className="review-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores similique aliquid neque fugit sapiente adipisci asperiores unde tenetur optio quis distinctio illo quasi, voluptates facere nemo doloribus magnam cum commodi.
                </p>
                <div className='slider-content d-flex align-items-center gap-4'>
                    <img src={ava3} alt="" className='w-25 rounded' />
                    <h6>A. Goodarn</h6>
                </div>
            </div> */}
        </Slider>
    );
};

export default TestimonialSlider;