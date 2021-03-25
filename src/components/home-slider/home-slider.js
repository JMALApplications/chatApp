import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const slides = [
    <StaticImage src="../../assets/images/purple_bg_1.jpg" alt="Purple Background" />,
    <StaticImage src="../../assets/images/tech_1.jpg" alt="Purple Tech Background" />
];

const HomeSlider = () => {

    return (

        <AliceCarousel items={slides} />

    );

}

export default HomeSlider;

