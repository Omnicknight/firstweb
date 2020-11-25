import React from 'react';
import Mainlogo from '../Images/Mainlogo.png';
import {Facebook, Twitter, Telegram} from '@material-ui/icons'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-main'>
                <div className='logo'>
                    <img src={Mainlogo} alt='Mainlogo'/>
                    <h3>ATLANTIDA</h3>
                </div>
                <div className='footer-info'>
                    <div className='leftSide'>
                        <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <span>ATLANTIDA STUDIO</span>
                        <p className='footer-text'>Steven Bernson, Attorney at Law<br/>1556 Broadway, suit 416<br/>New Yotk NY, 10120, USA</p>
                        <span>E-MAIL: ELEGANTFLYERS@GMAIL.COM<br/>+84 956 654 972</span>
                        <div className='social'>
                            <a href='/'><Telegram fontSize="small"/></a>
                            <div></div>
                            <a href='/'><Twitter fontSize="small" /></a>
                            <div></div>
                            <a href='/'><Facebook fontSize="small" /></a>
                        </div>
                    </div>
                    <div className='rightSide'>
                        <form className='footer-form'>
                            <div>
                                <div>
                                    <input type='text' placeholder='Name*'/>
                                </div>
                                <div>
                                    <input type='email' placeholder='E-mail*'/>
                                </div>
                                <div>
                                    <input type='tel' placeholder='Telephone*'/>
                                </div>
                                <div>
                                    <input type='text' placeholder='Website'/>
                                </div>
                                <div className='massage'>
                                    <input type='text' placeholder='Massage'/>
                                </div>
                            </div>
                            <input className='btn' type='submit' value='Submit'/>
                        </form>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2015 Atlantida Theme</p>
                </div>
            </div>
        </div>
    )
}
