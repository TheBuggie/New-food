import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/Carousel.css'

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper carousStyle">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} showIndicators={false}>
                <div class="imageSize">
                    <img src="../RegularPlan.jpg"/>
                </div>
                <div class="imageSize">
                    <img src="../RegularPlan.jpg"/>
                </div>
                <div class="imageSize">
                    <img src="../RegularPlan.jpg"/>
                </div>
            </Carousel>
        </div>
    );
}