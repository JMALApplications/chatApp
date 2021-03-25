import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '.../assets/images/purple_bg_1.jpg';
import image2 from 'src/assets/images/tech_1.jpg';

const slides = [
    <StaticImage src="../assets/images/purple_bg_1.jpg" alt="Purple Background" />,
];

const HomeSlider = () => {

    return (

        <AliceCarousel items={slides} />

    );

}

export default HomeSlider;

