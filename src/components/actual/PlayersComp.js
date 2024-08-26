import Card2Component from "../helper/Card2Component";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useState, useEffect } from "react";
import styles from "../../css/myfile.module.css";
import { MDBIcon } from "mdb-react-ui-kit";
import Card1Component from "../helper/Card1Component";

import Pagination from "react-js-pagination";
import Card1ListComponent from "../helper/Card1ListComponent";
export default function PlayersComp() {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [showCard2, setShowCard2] = useState(false);
  const [gridView, setGridView] = useState(true);
  const [activePage, setActivePage] = useState(1);

  const handleToggleClick = () => {
    setExpanded(!isExpanded);
    setHamburgerButton(!hamburgerButton);
    setShowCard2(!showCard2);
  };

  const handleGridViewClick = () => {
    setShowCard2(false);
    setGridView(true);
  };

  const handleListViewClick = () => {
    setShowCard2(false);
    setGridView(false);
  };

  const handleActivePage = (pageNumber) => {
    setActivePage(pageNumber)
  }

  useEffect(() => {
    if (width <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
    if (width > 1024) {
      setShowCard2(false);
      setHamburgerButton(true);
    }
  }, [width]);
  return (
    <div className="d-flex flex-nowrap m-3">
      
      
      <div className="m-5">

        <div className="d-flex justify-content-between align-items-center">
          {width <= 1024 ? (
            <div className="m-3">
              <button
                className={`${styles.navIcon} ${hamburgerButton
                  ? styles["animation-rotate-enter"]
                  : styles["animation-rotate-exit"]
                  }`}
                onClick={handleToggleClick}
              >
               
              </button>
            </div>
          ) : null}
      
        </div>
        <div>
<h1>PLAYERS</h1>
        </div>
        <div>
         
          <div className={`d-flex flex-wrap position-relative`}>
            {gridView ? (
              <>
              <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
                 <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
                 <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
               <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
                 <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />
                 <Card1Component
  width={
    width <= 615
      ? "100%"
      : width <= 768
        ? "45%"
        : width <= 992
          ? "28%"
          : width <= 1024
            ? "30%"
            : "22%" // Set the appropriate width value for width > 1024 and <= 1350
  }
                />

              </>
            ) : (
              <>
                <Card1ListComponent width={'100%'} />
                <Card1ListComponent width={'100%'} />
                <Card1ListComponent width={'100%'} />
              </>
            )}
          </div>
          <div className="d-flex justify-content-center">
          <div style={{ zIndex: 1 }}>
        
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
