import React, { useState } from "react";
import "./Search.css";

export default function Search({ selectPosition, setSelectPosition }) {
  const [searchValue, setSearchValue] = useState("");
  const [resultSearch, setresultSearch] = useState([]);

  const getAllLocation = () => {
    fetch(`https://www.hel.fi/palvelukarttaws/rest/v4/unit/?ontologyword=473`)
      .then((res) => res.json())
      .then((data) => {
        const selectData = data.filter((item) =>
          item.name_fi.includes(searchValue)
        );
        console.log(selectData);
        setresultSearch(selectData);
      });
  };

  const capitalizeFirstLetter = (e) => {
    const getValueInput = e.target.value;
    const modifiedValue =
      getValueInput.charAt(0).toUpperCase() + getValueInput.slice(1);
    setSearchValue(modifiedValue);
  };

  return (
    <>
      <div className="container container-search">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <i className="fa fa-search"></i>
              <input
                value={searchValue}
                onChange={capitalizeFirstLetter}
                type="text"
                className="form-control fs-3"
                placeholder="HAE ..."
              />
              <button className="btn" onClick={getAllLocation}>
                HAE
              </button>
            </div>
            <div>
              <ul>
                {resultSearch?.map((result, index) => (
                  <li
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectPosition(result)}
                  >
                    {result.name_fi}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
