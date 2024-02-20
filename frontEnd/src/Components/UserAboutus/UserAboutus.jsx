import React from "react";
import "./UserAboutus.css";

export default function UserAboutus({ name, job, des }) {
  return (
    <>
      <div className="card p-3 text-center px-4">
        <div className="user-image">
          <img src="" className="rounded-circle" width="80" />
        </div>
        <div className="user-content">
          <h5 className="mb-0">{name}</h5>
          <span>{job}</span>
          <p>{des}</p>
        </div>
        <div className="ratings">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
      </div>
    </>
  );
}
