import React from 'react';
import Blog1 from '../Images/blog1.png';
import Blog2 from '../Images/blog2.png';
import Blog3 from '../Images/blog3.png';
import Blog4 from '../Images/blog4.png';
import ArrowSpan from '../Images/arrowSpan.png'

export default function Blog() {
    return (
        <div className='blog'>
            <a name='blog'></a>
            <span className='head-screen'>BLOG</span>
            <p className='about-text center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut ultricies odio. Nulla justo nibh, mattis congue malesuada mollis, vestibulum id odio. Fusce maximus, justo vel fermentum elementum, metus est hendrerit magna, sed convallis dolor mauris in augue.</p>
            <div className='blog-info'>
                <img src={Blog1}/>
                <div className='blog-about bgc-black'>
                    <span className='by-admin'>14 Aug 2015 / By Admin</span>
                    <span className='about-blog-title'><img src={ArrowSpan}/>ELEMENTUM SAGITTIS VITAE AT LEO</span>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Elementum sagittis vitae et leo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Ultricies mi quis hendrerit dolor. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Enim diam vulputate ut pharetra.</p>
                </div>
                <img src={Blog2}/>
                <div className='blog-about'>
                    <span className='by-admin'>14 Aug 2015 / By Admin</span>
                    <span className='about-blog-title'><img src={ArrowSpan}/>ELEMENTUM SAGITTIS VITAE AT LEO</span>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Elementum sagittis vitae et leo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Ultricies mi quis hendrerit dolor. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Enim diam vulputate ut pharetra.</p>
                </div>
                <div className='blog-about'>
                    <span className='by-admin'>14 Aug 2015 / By Admin</span>
                    <span className='about-blog-title'><img src={ArrowSpan}/>ELEMENTUM SAGITTIS VITAE AT LEO</span>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Elementum sagittis vitae et leo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Ultricies mi quis hendrerit dolor. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Enim diam vulputate ut pharetra.</p>
                </div>
                <img src={Blog3}/>
                <div className='blog-about bgc-black'>
                    <span className='by-admin'>14 Aug 2015 / By Admin</span>
                    <span className='about-blog-title'><img src={ArrowSpan}/>ELEMENTUM SAGITTIS VITAE AT LEO</span>
                    <p className='blog-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi tincidunt augue interdum. Elementum sagittis vitae et leo. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Ultricies mi quis hendrerit dolor. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Enim diam vulputate ut pharetra.</p>
                </div>
                <img src={Blog4}/>
            </div>
        </div>
    )
}
