import { Button } from '@material-ui/core';
import React from 'react';
import leftswipe from '../Images/leftswipe.png';
import rightswipe from '../Images/rightswipe.png';

export default function FirstScreen() {
    return (
        <div className='firstScreen'>
            <a name='home' className='anchor-home'></a>
            <section className='swipeInfo'>
                <div>
                    <p className='company'>Design Studio and Digital Agency</p>
                    <p className='ourName'>WE ARE ATLANTIDA</p>
                    <button>Get Started</button>
                </div>
            </section>
        </div>
    )
}
