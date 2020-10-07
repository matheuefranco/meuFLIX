import React, { useState } from "react";
import { VideoCardGroupContainer, Title, ExtraLink } from "./styles";
import VideoCard from "./components/VideoCard";
import Slider from "./components/Slider";
import { SliderItem } from "./components/Slider";

function Carousel({ ignoreFirstVideo, category }) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryDescription = category.descricao;
  const categoryURL = category.url;
  const videos = category.videos;

  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || "red" }}>
            {categoryTitle}
          </Title>
          {categoryDescription && (
            <ExtraLink href={categoryURL} target="_blank">
              {categoryDescription}
            </ExtraLink>
          )}
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
