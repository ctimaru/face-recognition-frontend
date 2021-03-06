import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import einstein from './einstein.png';


const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 65, transition: true, reverse: false}} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                     <img style={{paddingTop: '10px'}} alt='logo ' src={einstein}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;