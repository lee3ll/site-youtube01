import React from 'react';
import { Link } from 'react-router-dom';
const VideoCard = ({ video }) => {
  return (
    <div>
      <Link to={`/video/${video.id.videoId}`}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </Link>
      <h3>{video.snippet.title.slice(0, 30)}</h3>
    </div>
  );
};
export default VideoCard;