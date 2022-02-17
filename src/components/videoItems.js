import React from "react";
import "./VideoItems.css";

function VideoItems(props) {
  const root = props.video.snippet;
  const onVideoSelect = props.onVideoSelect;
  return (
    <div
      onClick={() => {
        onVideoSelect(props.video);
      }}
      className="item video-items"
    >
      <img
        alt={root.title}
        src={`${root.thumbnails.medium.url}`}
        className="ui image"
      />
      <div className="content">
        <div className="header">{root.title}</div>
      </div>
      <hr></hr>
    </div>
  );
}
export default VideoItems;
