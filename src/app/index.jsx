import React from "react";
import data from "../data/videos.json";
import "./styles.css";

import Carousel from "./carousel";

export default function App() {
  return (
    <div className="container">
      <Carousel items={data.videos} />
    </div>
  );
}
