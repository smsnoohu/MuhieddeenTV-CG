import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";

import './newsScroller.css';

const NewsScroller = props => {

  const { newsTitle, newsTitleText, newsText, newsSize, newsPadding, newsY, newsSpeed, newsDirection, newsMove, newsFont, newsStyle, newsTitleBg, newsTitleColor, newsBg, newsColor } = props.data;

  const [newsElement, setNewsElement] = useState([]);

  useEffect(() => {

    const setNewsText = () => {
      const newsArray = newsText.split(';');
        setNewsElement(newsArray);
      }

      if(newsText && newsText !== ''){
        setNewsText();
      }

  }, [newsText]);

  return(
    <div className={`ticker s1 ${newsFont ? newsFont.toLowerCase() : ''} ${!newsTitleBg && !newsTitleColor && !newsBg && !newsColor && newsStyle ? newsStyle.toLowerCase() : 's1'}`} style={{
      fontSize: newsSize ? newsSize * 10 + 'px' : '25px',
      paddingTop: newsPadding ? newsPadding * 5 + 'px' : '15px',
      paddingBottom: newsPadding ? newsPadding * 3 + 'px' : '15px',
      bottom: newsY + 'px',
      backgroundColor: newsBg,
      color: newsColor
    }}>
      {newsTitle && newsTitle.toLowerCase() === 'off' ? ( null ) : (
        <span className={`ticker_title${newsDirection === 'ltr' ? ' ltr' : ''} ${newsFont ? newsFont.toLowerCase() : ''}`} style={{
          fontSize: newsSize ? newsSize * 10 + 'px' : '25px',
          paddingTop: newsPadding ? newsPadding * 5 + 'px' : '15px',
          paddingBottom: newsPadding ? newsPadding * 3 + 'px' : '15px',
          backgroundColor: newsTitleBg,
          color: newsTitleColor
        }}>{newsTitleText && newsTitleText !== '' ? newsTitleText : 'News: '}</span>
      )}

      <Ticker speed={newsSpeed ? newsSpeed * 5 : 5} move={newsMove === 'true' ? true : newsMove === 'false' ? false : true} direction={`${newsDirection === 'ltr' ? 'toRight' : 'toLeft'}`}>
        {({ index }) => (
          <div className="ticker_content">
            {newsElement && newsElement.length && newsElement.map((text, i) => (
              <span
                key={`news_${i}`}
                className={newsFont ? newsFont.toLowerCase() : ''}
                style={{
                  lineHeight: newsSize ? newsSize * 10 + 10 + 'px' : '35px'
                }}
              >{text}</span>
            ))}
          </div>
        )}
      </Ticker>
    </div>
  )
};

export default NewsScroller;
