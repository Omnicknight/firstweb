import React from 'react';
import Compass from '../Images/compass.png'

export default function Purchase() {
    return (
        <div className='purchase'>
            <div className='purchase-info'>
            <img src={Compass} />
            <div>
                <span className='purchase-title'>Looking for a quality and affordable for you next project ?</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <a className='btn'>Purchase</a>
            </div>
        </div>
    )
}
