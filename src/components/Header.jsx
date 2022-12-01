import React from 'react';
import { useState } from 'react';
import nike from "../nike.png";

const Header = () => {
    
    const [sended, setSended] = useState(false)

    const handleSended = () => {
        setSended(!sended)
    }

    return (
    <div>
        <div className="nike">
            <img src={nike} alt="nike" className="header-nike" />
        </div>
        <div className="header">
            <div className="header-text">
                <p>Nike Sneaker</p>
                <p>$120</p>
            </div>
            <button type="button" className="header-button" onClick={handleSended}>
            Детали
            </button>
            {sended && <div className='dop_panel'>
                <div className='dop_panel_text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </div>
            <div className='dop_panel_x' onClick={handleSended}>x</div>
            </div>}
        </div>
    </div>
    );
};

export default Header;