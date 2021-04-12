import React, { useState, useEffect } from 'react';

import Ticker from './Ticker';
import './newsTicker.css';

const NewsTicker = props => {
    const { tickerX, tickerY, tickerPadding, tickerFont, tickerStyle, tickerTitleBg, tickerTitleColor, tickerBg, tickerColor, tickerTitleSize, tickerSize, tickerTitle, tickerHeight, tickerRow, tickerSpeed, tickerDirection, tickerDuration, tickerTitleText,tickerText } = props.data

    const [tickerElement, setTickerElement] = useState([]);

    useEffect(() => {
        
        const setTickerText = () => {
            const tickerArray = tickerText.split(';');
            setTickerElement(tickerArray);
        }

        if(tickerText && tickerText !== ''){
            setTickerText();
        }
        
    }, [tickerText]);

    const renderTicker = () => (
        <Ticker
            className="newsTicker"
            rowHeight={tickerHeight || 50}
            maxRows={tickerRow || 1}
            speed={tickerSpeed ? tickerSpeed * 100 : 600}
            direction={tickerDirection || 1}
            duration={tickerDuration ? tickerDuration * 1000 : 4000}
            autoStart={true}
        >
            {tickerElement && tickerElement.length && tickerElement.map((text, i) => (
                <div
                    key={`ticker_${i}`}
                    style={{
                        paddingTop: tickerPadding  + 'px',
                        paddingBottom: tickerPadding  + 'px',
                        backgroundColor: tickerBg,
                        color: tickerColor,
                        fontSize: tickerSize ? tickerSize * 10 + 'px' : '30px'
                    }}
                >{text}</div>
            ))}
        </Ticker>
    )

    return(
        <div
            className={`news-ticker-wrapper s1 ${tickerFont ? tickerFont.toLowerCase() : ''} ${tickerStyle ? tickerStyle.toLowerCase() : 's1'}`}
            style={{
                left: tickerX + 'px',
                top: tickerY + 'px'
            }}
        >
            {tickerTitle && tickerTitle.toLowerCase() === 'off' ? ( null ) : (
                <h2
                    style={{
                        backgroundColor: tickerTitleBg,
                        color: tickerTitleColor,
                        fontSize: tickerTitleSize ? tickerTitleSize * 10 + 'px' : '25px'
                    }}
                >{tickerTitleText ? tickerTitleText : 'Updates'}</h2>
            )}
            {tickerElement && tickerElement.length && renderTicker()}
        </div>
    )
}

export default NewsTicker;