import React, { Component } from "react";
import Slider from "react-slick";
import Avatar from '../Images/avatar.png'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className='slider'>
        <Slider {...settings}>
          <div>
            <img src={Avatar}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <span className='comment-name'>ALEXANDER PODVALNY</span>
            <span className='comment-link'>Free-PSD-Template.com Company</span> 
          </div>
          <div>
          <img src={Avatar}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <span className='comment-name'>ALEXANDER PODVALNY</span><br/>
            <span className='comment-link'>Free-PSD-Template.com Company</span>
          </div>
          <div>
          <img src={Avatar}/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <span className='comment-name'>ALEXANDER PODVALNY</span>
            <span className='comment-link'>Free-PSD-Template.com Company</span>
          </div>
        </Slider>
      </div>
    );
  }
}