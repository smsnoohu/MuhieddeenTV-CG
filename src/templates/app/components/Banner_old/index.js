import React from 'react';

import './banner.css';

const Banner = props => {
    const { bannerH, bannerY, bannerText1, bannerText2, bannerSize, bannerFont, bannerText1Font, bannerText2Font } = props.data;

    return(
        <div
            className={`banner ${bannerFont ? bannerFont.toLowerCase() : ''}`}
            style={{
                height: bannerH && bannerH !== 0 ? bannerH + 'px' : '',
                bottom: bannerY + 'px'
            }}
        >
            <div className="title">
                {bannerText1 && 
                    <span
                        className={`sub-title ${bannerText1Font ? bannerText1Font.toLowerCase() : ''}`}
                        style={{
                            fontSize: bannerSize && bannerSize !== 0 ? bannerSize * 10 + 'px' : ''
                        }}
                    >{bannerText1}</span>
                }
                {bannerText2 &&
                    <span
                        className={`main-title ${bannerText2Font ? bannerText2Font.toLowerCase() : ''}`}
                        style={{
                            fontSize: bannerSize && bannerSize !== 0 ? bannerSize * 20 + 'px' : ''
                        }}
                    >{bannerText2}</span>
                }
            </div>
        </div>
    )
}

export default Banner;