import React, { useState } from "react";
import VideoIframeResponsive from "./components/VideoIframeResponsive";
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from "./styles";
import ModalVideo from "./components/ModalVideo";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

export default function BannerMain({ videoTitle, videoDescription, url }) {
  const youTubeID = getYouTubeId(url);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <BannerMainContainer backgroundImage={bgUrl}>
        <ContentAreaContainer>
          <ContentAreaContainer.Item>
            <ContentAreaContainer.Title>
              {videoTitle}
            </ContentAreaContainer.Title>

            <ContentAreaContainer.Description>
              {videoDescription}
            </ContentAreaContainer.Description>
          </ContentAreaContainer.Item>

          <ContentAreaContainer.Item>
            <VideoIframeResponsive youtubeID={youTubeID} />
            {/* <WatchButton href={url}></WatchButton> */}
            <WatchButton onClick={handleOpen}>Assistir</WatchButton>
          </ContentAreaContainer.Item>
        </ContentAreaContainer>
      </BannerMainContainer>
      <ModalVideo open={open} handleClose={handleClose} videoURL={url} />
    </div>
  );
}
