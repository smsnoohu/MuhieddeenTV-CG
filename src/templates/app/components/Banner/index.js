import React from 'react';

import './banner.css';

const Banner = props => {
    const { waterMarkX, waterMarkY, waterMarkO, waterMarkText, waterMarkSize } = props.data;

    return (
        <div className="banner-wrapper">
            <div className="banner-container">
                <div id="mainDiv">
                    <div id="boxDiv" className="top">
                        <div id="front" data-content="Live"></div>
                        <div id="back" data-content="Live"></div>
                        <div id="left" data-content="Majlis"></div>
                        <div id="right" data-content="Majlis"></div>
                        <div id="top"></div>
                        <div id="bottom"></div>
                    </div>
                    <div id="boxDiv">
                        <div id="front"></div>
                        <div id="back"></div>
                        <div id="left"></div>
                        <div id="right"></div>
                        <div id="top"></div>
                        <div id="bottom"></div>
                        
                        {/* <div class="shadow"></div> */}
                    </div>
                    <div id="boxDiv" className="bottom">
                        <div id="front" data-content="Majlis"></div>
                        <div id="back" data-content="Majlis"></div>
                        <div id="left" data-content="Live"></div>
                        <div id="right" data-content="live"></div>
                        <div id="top"></div>
                        <div id="bottom"></div>
                    </div>
                </div>
                <div className="banner-title">Welcome to MuhieddeenTV</div>
            </div>
            <div className="main-bg"></div>
        </div> 
    )
}

export default Banner;