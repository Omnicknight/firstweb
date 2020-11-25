import React from 'react';
import Clients1 from '../Images/clients1.png';
import Clients2 from '../Images/clients2.png';
import Clients3 from '../Images/clients3.png';
import Clients4 from '../Images/clients4.png';
import Clients5 from '../Images/clients5.png'
import SimpleSlider from './SimpleSlider';

export default function Clients() {
    return (
        <div className='clients'>
            <a name='clients'></a>
            <div>
                <span className='head-screen margin-40'>CLIENTS</span>
                <p className='about-text center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ultricies odio. Nulla justo nibh, mattis congue malesuada mollis, vestibulum id odio. Fusce maximus, justo vel fermentum elementum, metus est hendrerit magna, sed convallis dolor mauris in augue.</p>
                <div className='clients-icons'>
                    <img src={Clients1}/>
                    <img src={Clients2}/>
                    <img src={Clients3}/>
                    <img src={Clients4}/>
                    <img src={Clients5}/>
                </div>     
            </div>
            <div className='comment'>
                <SimpleSlider />

            </div>
        </div>
    )
}
