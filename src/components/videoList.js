import React from "react";
import VideoItems from "./videoItems";

const VideoList = ({ videoList, onVideoSelect }) => {
  const renderList = videoList.map((vid) => {
    return <VideoItems key={vid.id.videoId} video={vid} onVideoSelect={onVideoSelect} />;
  });
  return <div className="videoList">{renderList}</div>;
};
export default VideoList;
