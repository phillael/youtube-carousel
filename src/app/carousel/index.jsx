import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import Video from "../video";

import "./styles.css";

export default function Carousel({ items }) {
  const [currIndex, setCurrIndex] = useState(0);
  const cardSize = 344;
  return (
    <div className="carousel-container">
      {currIndex > 0 ? (
        <div className="arrow left">
          <FontAwesomeIcon
            icon={faChevronCircleLeft}
            onClick={() => setCurrIndex((curr) => curr - 1)}
          />
        </div>
      ) : null}
      {currIndex < 5 ? (
        <div className="arrow right">
          <FontAwesomeIcon
            icon={faChevronCircleRight}
            onClick={() => setCurrIndex((curr) => curr + 1)}
          />
        </div>
      ) : null}
      <div className="carousel">
        <div
          className="slider"
          style={{
            left: cardSize * -currIndex,
          }}
        >
          <div className="wrapper">
            {items.map((json) => (
              <Video
                key={json.url}
                title={json.title}
                thumbnail={json.thumb}
                url={json.url}
                views={json.views}
                length={json.length}
                date={json.uploadDate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
