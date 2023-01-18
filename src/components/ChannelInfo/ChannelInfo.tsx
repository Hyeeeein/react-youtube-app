import React from 'react';
import { Link } from 'react-router-dom';
import './ChannelInfo.scss';

const ChannelInfo = ({ videoId, channelInfo }) => {
  return (
    <div className="channelInfo">
      <div className="main">
        <div className="profileImg">
          <img src={channelInfo.snippet.thumbnails.default.url} alt="avatar" />
        </div>
        <div className="profileTxt">
          <Link to="#">{channelInfo.snippet.localized.title}</Link>
          <span>{channelInfo.statistics.subscriberCount} subscribers</span>
        </div>
        <div className="btn">
          <button>SUBSCRIBED</button>
        </div>
      </div>
      <div className="description">{channelInfo.snippet.localized.description}</div>
    </div>
  );
};

export default ChannelInfo;
