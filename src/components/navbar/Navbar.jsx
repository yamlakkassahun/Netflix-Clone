import React, { useEffect, useState } from 'react';
import './Nav.css';

const Navbar = () => {
    const [show, handelShow] = useState(false);

    const transitionOnScroll = () => {
        if(window.scrollY > 100) {
            handelShow(true);
        } else {
            handelShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionOnScroll);
        return () => window.removeEventListener('scroll', transitionOnScroll);
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
                <img className='avatar_logo' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="logo" />
            </div>
            
        </div>
    )
}

export default Navbar