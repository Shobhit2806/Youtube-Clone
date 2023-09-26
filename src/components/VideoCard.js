import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info ? info : "";
  const { channelTitle, title, thumbanils } = snippet ? snippet : "";
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        src={snippet?.thumbnails?.medium?.url}
        alt=""
      />
      <ul>
        <li className="font-bold">{snippet?.channelTitle}</li>
        <li>{snippet?.title}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export const RedBorderedVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
