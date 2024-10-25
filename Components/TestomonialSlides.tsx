import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviews from './ClientReviews';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const TestomonialSlides = () => {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
>      
    <ClientReviews image="/images/c1.jpg" name="Mohammad Moazam" role="Web Developer"/>
    <ClientReviews image="/images/c2.jpg" name="Hammad Javed" role="Mern Stack Developer"/>
    <ClientReviews image="/images/c1.jpg" name="Haris Rashid" role="React Developer"/>
    <ClientReviews image="/images/c2.jpg" name="Ahmed Nadeem" role="Next Js Developer"/>
</Carousel>
  );
}

export default TestomonialSlides