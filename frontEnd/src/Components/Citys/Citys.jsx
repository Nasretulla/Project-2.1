import React, { useEffect, useState } from "react";
import OneBoxForCity from "../OneBoxForCity/OneBoxForCity";
import "./Citys.css";

export default function Citys() {
  const [allLocation, setAlllocation] = useState([]);

  // api get from this web https://api.hel.fi/linkedevents/v1/
  useEffect(() => {
    fetch(`https://www.hel.fi/palvelukarttaws/rest/v4/unit/?ontologyword=473`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAlllocation(data);
      });
  }, []);

  return (
    <>

      <div className="container">
        <div className="row">
          {allLocation.filter(item=>item.picture_url ).slice(0,8).map((item) => (
            <OneBoxForCity {...item} />
          ))}
        </div>
      </div>
      
    </>
  );
}
