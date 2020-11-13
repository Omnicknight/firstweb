import React from 'react';
import awards from '../Images/awards.png';
import clients from '../Images/clients.png';
import checkbox from '../Images/checkbox.png';
import briefcase from '../Images/briefcase.png'

export default function AboutUs() {
    return (
        <div className='aboutUs'>
            <a name='aboutUs'></a>
            <div className='aboutUsInfo'>
                <p className='head-screen'>ABOUT US</p>
                <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum suscipit eros a mollis. Aliquam et tellus et felis commodo auctor. Cras aliquam velit at libero ultricies bibendum. Morbi hendrerit, tellus eget rhoncus tempus, sapien dui eleifend quam, non faucibus eros purus vitae augue. Nunc non eros at arcu hendrerit maximus non vulputate arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut mattis volutpat leo id molestie. Maecenas nec nisl semper, sodales ligula eget, molestie lectus. Quisque accumsan lacus nec ultricies sodales. Cras vel tempor lectus. Sed ut semper massa, non ullamcorper ligula. Etiam et ullamcorper arcu.</p>
                <div className='btn-in-about'>
                    <a href='/' className='btn'>Contact Us</a>
                    <a href='/' className='btn'>Portfolio</a>
                </div>
            </div>
            <div className='reviews'>
                <div>
                    <img src={awards}/>
                    <p>AWARDS<br/> WINNER</p>
                    <span>54</span>
                </div>
                <div>
                    <img src={checkbox}/>
                    <p>JOBS<br/> DONE</p>
                    <span>1054</span>
                </div>
                <div>
                    <img src={clients}/>
                    <p>HAPPY<br/> CLIENTS</p>
                    <span>120</span>
                </div>
                <div>
                    <img src={briefcase}/>
                    <p>REVIEWS<br/> RECIEVED</p>
                    <span>54</span>
                </div>
            </div>
        </div>
    )
}
