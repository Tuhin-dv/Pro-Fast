import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/banner/banner1.png'
import img2 from '../assets/banner/banner2.png'
import img3 from '../assets/banner/banner3.png'

function Banner() {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop showThumbs={false}>
                <div>
                    <img src={img1} alt="Slide 1" />
                  
                </div>
                <div>
                    <img src={img2} alt="Slide 2" />
                   
                </div>
                <div>
                    <img src={img3} alt="Slide 3" />
                   
                </div>
            </Carousel>
        </div>
    )
}

export default Banner