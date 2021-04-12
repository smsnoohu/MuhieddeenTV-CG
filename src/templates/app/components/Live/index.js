import React from 'react';

import './live.css';

const Live = props => {
    const { liveX, liveY, liveSize, liveStyle } = props.data;

    return(
        <div
            className={`live ${liveStyle ? liveStyle.toLowerCase() : ''}`}
            style={{
                left: liveX + 'px',
                top: liveY + 'px',
                fontSize: liveSize * 10 + 'px',
                paddingTop: liveSize * 2 + 'px',
                paddingRight: liveSize * 5 + 'px',
                paddingBottom: liveSize * 2 + 'px',
                paddingLeft: liveSize * 5 + 'px'
            }}
        >
            <span>L</span><span>I</span><span>V</span><span>E</span>
        </div>
    )
}

export default Live;