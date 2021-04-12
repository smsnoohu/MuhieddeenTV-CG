import React from 'react';

import './waterMark.css';

const WaterMark = props => {
    const { waterMarkY, waterMarkO, waterMarkText, waterMarkSize } = props.data;

    return (
        <div
            className="watermark"
            data-text={waterMarkText ? waterMarkText : 'MuhieddeenTV'}
            style={{
                top: waterMarkY + 'px',
                opacity: waterMarkO ? waterMarkO/10 : '.5',
                fontSize: waterMarkSize ? waterMarkSize * 10 + 'px' : '30px'
            }}
        >
            {waterMarkText ? waterMarkText : 'MuhieddeenTV'}
        </div>
    )
}

export default WaterMark;