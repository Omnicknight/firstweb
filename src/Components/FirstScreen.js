import { Button } from '@material-ui/core';
import React from 'react';
import leftswipe from '../Images/leftswipe.png';
import rightswipe from '../Images/rightswipe.png';

export default function FirstScreen() {
    return (
        <div className='firstScreen'>
            <a name='home' className='anchor-home'></a>
            <div className='leftSwipe'>
                <a href='/'><img src={leftswipe} alt='back'/></a>
            </div>
            <section className='swipeInfo'>
                <div>
                    <p className='company'>Design Studio and Digital Agency</p>
                    <p className='ourName'>WE ARE ATLANTIDA</p>
                    <button>Get Started</button>
                </div>
            </section>
            <div className='rightSwipe'>
                <a href='/'><img src={rightswipe} alt='back'/></a>
            </div>
        </div>
    )
}
