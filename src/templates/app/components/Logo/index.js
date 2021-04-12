import React from 'react';

import './logo.css';
import logo from '../../assets/images/logo.png'

const Logo = props => {
    const { logoX, logoY, logoSize } = props.data;

    return(
        <div className="logo" style={{
            left: logoX + 'px',
            top: logoY + 'px'
          }}
        >
            <img
                src={logo}
                style={{
                    width: logoSize ? logoSize + 'px' : '175px'
                }}
                alt="MuhieddenTV"
            />
        </div>
    );
}

export default Logo;