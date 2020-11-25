import React, { Component } from 'react';
import Mainlogo from '../Images/Mainlogo.png';
import {Facebook, Twitter, Telegram} from '@material-ui/icons'

export default class Head extends Component {
    render() {
        return (
            <div className='head'>
                <div className='logo'>
                    <img src={Mainlogo} alt='Mainlogo'/>
                    <h3>ATLANTIDA</h3>
                </div>
                <nav>
                    <ul className='navBar'>
                        <li><a href='#home'>HOME</a></li>
                        <li><a href='#aboutUs'>ABOUT</a></li>
                        <li><a href='#services'>SERVICES</a></li>
                        <li><a href='/'>HISTORY</a></li>
                        <li><a href='#clients'>CLIENTS</a></li>
                        <li><a href='#prices'>PRICES</a></li>
                        <li><a href='#blog'>BLOG</a></li>
                        <li><a href='#contact'>CONTACT</a></li>
                    </ul>
                </nav>
                <div className='social'>
                    <a href='/'><Telegram fontSize="small"/></a>
                    <div></div>
                    <a href='/'><Twitter fontSize="small" /></a>
                    <div></div>
                    <a href='/'><Facebook fontSize="small" /></a>
                </div>
            </div>
        )
    }
}

