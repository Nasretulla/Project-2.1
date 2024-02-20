import React, { useEffect, useState } from "react";

import "./Pagination.css";
import { Link, useParams } from "react-router-dom";

export default function Pagination({
  items,
  itemsCount,
  pathname,
  setShownLocation,
}) {
  const { page } = useParams();
  const [pageCounts, setPageCounts] = useState(null);

  useEffect(() => {
    let endIndex = itemsCount * page;
    let startEndex = endIndex - itemsCount;
    let paginationItem = items.slice(startEndex, endIndex);
    setShownLocation(paginationItem);

    let pagesNumber = Math.ceil(items.length / itemsCount);
    setPageCounts(pagesNumber);
  }, [page, items]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div class="pagination_rounded">
            <h3 className="page-number">
              Page:{Number(page) <= 0 ? 1 : Number(page)}
            </h3>
            <ul>
              <li>
                <Link to={`${pathname}/${Number(page) - 1}`} class="prev">
                  {`Edellinen`}
                </Link>
              </li>
              {Array(pageCounts)
                .fill(0)
                .slice(0, 6)
                .map((item, index) => (
                  <>
                    <li>
                      {index + 1 === Number(page) ? (
                        <Link
                          to={`${pathname}/${index + 1}`}
                          className="activePagination"
                        >
                          {index + 1}
                        </Link>
                      ) : (
                        <Link to={`${pathname}/${index + 1}`}>{index + 1}</Link>
                      )}
                    </li>
                  </>
                ))}

              <li>
                <Link to={`${pathname}/${Number(page) + 1}`} class="next">
                  {`Seuraava`}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
