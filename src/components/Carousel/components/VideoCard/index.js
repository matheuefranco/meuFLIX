import React, { useState } from "react";
import { VideoCardContainer } from "./styles";
import ModalVideo from "../ModalVideo";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <VideoCardContainer
        url={image}
        style={{ borderColor: categoryColor || "red" }}
        title={videoTitle}
        onClick={handleOpen}
      >
        <h4>{videoTitle}</h4>
      </VideoCardContainer>
      <ModalVideo open={open} handleClose={handleClose} videoURL={videoURL} />
    </div>
  );
}

export default VideoCard;
