import React from "react";
import Top from "./top";
import Bottom from "./bottom";
import "./styles.css";

export default function Video(props) {
  return (
    <div className="card">
      <Top thumbnail={props.thumbnail} length={props.length} />
      <Bottom
        title={props.title}
        views={props.views}
        length={props.length}
        date={props.date}
      />
    </div>
  );
}
