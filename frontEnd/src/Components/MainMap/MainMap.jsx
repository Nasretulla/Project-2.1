import React, { useState } from "react";
import MapTesti from "../Maptesti/MapTesti";
import Search from "../Search/Search";
import './MainMap.css'

export default function MainMap() {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <>
      <>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-6 map-box">
              <MapTesti selectPosition={selectPosition} />
            </div>

            <div className="col-md-6">
              <Search
                selectPosition={selectPosition}
                setSelectPosition={setSelectPosition}
              />
            </div>
          </div>
        </div>
      </>
    </>
  );
}
