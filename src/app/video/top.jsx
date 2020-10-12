import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faList } from "@fortawesome/free-solid-svg-icons";

export default function Top(props) {
  return (
    <div className="top">
      <div className="overlays">
        <div className="icon">
          <FontAwesomeIcon icon={faClock} />
          <div className="pop-out watch-later">WATCH LATER</div>
        </div>

        <div className="icon">
          <FontAwesomeIcon icon={faList} />
          <div className="pop-out add-to-queue">ADD TO QUEUE</div>
        </div>

        <div className="time">{props.length}</div>
      </div>
      <img src={props.thumbnail} alt="video" className="thumbnail" />
    </div>
  );
}
