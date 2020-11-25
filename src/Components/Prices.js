import React from 'react'
import Lock from '../Images/lock.png';
import Advanced from '../Images/advanced.png';
import Pro from '../Images/pro.png';
import Dollar from '../Images/dollar.png'

export default function Prices() {
    return (
        <div className='prices'>
            <a name='prices'></a>
            <span className='head-screen'>PRICES</span>
            <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ultricies odio. Nulla justo nibh, mattis congue malesuada mollis, vestibulum id odio. Fusce maximus, justo vel fermentum elementum, metus est hendrerit magna, sed convallis dolor mauris in augue.</p>
            <div className='prices-block'>
                <div className='price-card'>
                    <span>BASIC</span>
                    <img src={Lock}/>
                    <div className='price'>
                        <img src={Dollar}/>
                        <span>10</span>
                    </div>
                    <p>Full Access<br/>Unlimited Edition<br/>Full Backup<br/>Free Tea and Free Mockup<br/>Several Price</p>
                    <a className='btn'>Sing Up</a>
                </div>
                <div className='price-card'>
                    <span>ADVANCED</span>
                    <img src={Advanced}/>
                    <div className='price'>
                        <img src={Dollar}/>
                        <span>20</span>
                    </div>
                    <p>Full Access<br/>Unlimited Edition<br/>Full Backup<br/>Free Tea and Free Mockup<br/>Several Price</p>
                    <a className='btn'>Sing Up</a>
                </div>
                <div className='price-card'>
                    <span>PRO</span>
                    <img src={Pro}/>
                    <div className='price'>
                        <img src={Dollar}/>
                        <span>30</span>
                    </div>
                    <p>Full Access<br/>Unlimited Edition<br/>Full Backup<br/>Free Tea and Free Mockup<br/>Several Price</p>
                    <a className='btn'>Sing Up</a>
                </div>
            </div>
        </div>
    )
}
