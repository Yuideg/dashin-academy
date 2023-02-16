import React from 'react';
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
const rasDashin = "https://www.walkopedia.net/assets/walkimages/2798/RasDashensouthward-wikiuserFlorianFell.JPG"

export default function Home() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Dashin Academy</Title>
          <Subtitle>
          Dashin Academy is one the biggest platform for learning latest technology.
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />
      <Slide
        shouldRenderMask
        label="County - Ethiopia"
        background={{
          backgroundImageSrc: rasDashin
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background = {{
          backgroundImageSrc: craterRock
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
