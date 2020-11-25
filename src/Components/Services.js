import React from 'react';
import Idea from '../Images/Idea.png';
import Monitor from '../Images/Monitor.png';
import ComboChart from '../Images/ComboChart.png';
import Wordpress from '../Images/wordpress.png'

export default function Services() {
    return (
        <div className='services'>
            <a name='services'></a>
            <span className='head-screen'>SERVICES</span>
            <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ultricies odio. Nulla justo nibh, mattis congue malesuada mollis, vestibulum id odio. Fusce maximus, justo vel fermentum elementum, metus est hendrerit magna, sed convallis dolor mauris in augue.</p>
            <div className='about-services'>
                <fieldset className='services-block'>
                    <legend><img src={Idea}/></legend>
                    <span>GRAPHIC DESIGN</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ultricies odio. Nulla justo nibh, mattis congue malesuada mollis, vestibulum id odio. Fusce maximus, justo vel fermentum elementum, metus est hendrerit magna, sed convallis dolor mauris in augue. Maecenas sem quam, imperdiet sed pretium id, efficitur auctor arcu. Nulla blandit sed sapien ut tristique.</p>
                </fieldset>
                <fieldset className='services-block'>
                    <legend><img src={Monitor}/></legend>
                    <span>GRAPHIC DESIGN</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ultricies odio. Nulla justo nibh, mattis congue malesuada mollis, vestibulum id odio. Fusce maximus, justo vel fermentum elementum, metus est hendrerit magna, sed convallis dolor mauris in augue. Maecenas sem quam, imperdiet sed pretium id, efficitur auctor arcu. Nulla blandit sed sapien ut tristique.</p>
                </fieldset>
                <fieldset className='services-block'>
                    <legend><img src={ComboChart}/></legend>
                    <span>GRAPHIC DESIGN</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ultricies odio. Nulla justo nibh, mattis congue malesuada mollis, vestibulum id odio. Fusce maximus, justo vel fermentum elementum, metus est hendrerit magna, sed convallis dolor mauris in augue. Maecenas sem quam, imperdiet sed pretium id, efficitur auctor arcu. Nulla blandit sed sapien ut tristique.</p>
                </fieldset>
                <fieldset className='services-block'>
                    <legend><img src={Wordpress}/></legend>
                    <span>GRAPHIC DESIGN</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ultricies odio. Nulla justo nibh, mattis congue malesuada mollis, vestibulum id odio. Fusce maximus, justo vel fermentum elementum, metus est hendrerit magna, sed convallis dolor mauris in augue. Maecenas sem quam, imperdiet sed pretium id, efficitur auctor arcu. Nulla blandit sed sapien ut tristique.</p>
                </fieldset>
            </div>
        </div>
    )
}
