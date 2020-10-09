import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function Bottom(props) {
  return (
    <div className="bottom">
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="stats">
          <p>
            {props.views} · {props.date}
          </p>
        </div>
      </div>
      <div className="menu">
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
}
