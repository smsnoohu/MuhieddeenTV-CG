import React from 'react';

import { PREVIEW_DATA } from './constant/constant';
import './assets/scss/app.css';
import Logo from './components/Logo';
import Live from './components/Live';
import WaterMark from './components/WaterMark';
import NewsScroller from './components/NewsScroller';
import NewsTicker from './components/NewsTicker';
import Clock from './components/Clock';
import Banner from './components/Banner';

export default class MuhieddeenTV extends React.Component {
  static previewData = PREVIEW_DATA;

  render() {
    const { logo, waterMark, live, banner, news, ticker, clock, clockFormat } = this.props.data;

    return (
      <>
      
        {logo && logo.toLowerCase() === 'on' && <Logo data={this.props.data} />}

        {live && live.toLowerCase() === 'on' && <Live data={this.props.data} />}

        {ticker && ticker.toLowerCase() === 'on' && <NewsTicker data={this.props.data} />}

        {clock && clock.toLowerCase() === 'on' && <Clock format={clockFormat} data={this.props.data} />}

        {waterMark && waterMark.toLowerCase() === 'off' ? ( null ) : ( <WaterMark data={this.props.data} /> )}

        {/* {banner && banner.toLowerCase() === 'on' && <Banner data={this.props.data} />} */}

        {news && news.toLowerCase() === 'on' && <NewsScroller data={this.props.data} />}
        <Banner data={this.props.data} />
        
      </>
    )
  }
}