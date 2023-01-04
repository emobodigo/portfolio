import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CarouselContainer extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            dots: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            draggable: true,
            centerPadding: "0px",
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        centerPadding: "30px",
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: "30px",
                    }
                }
            ]
        }
        return (
            <Slider {...settings} >
                {this.props.children}
            </Slider>
        )
    }
}
