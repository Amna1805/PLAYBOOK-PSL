import React, { useEffect, useState, useRef } from "react";
import styles from "../../css/myfile.module.css";
import { FaUser } from "react-icons/fa";
import psllogo from "../../images/psllogo.png";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import Header3Component from "./Header3component";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header2Component = () => {
  const { width } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [rotateButtons, setRotateButtons] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleCartClick = () => {
    setCartOpen(!isCartOpen);
    document.body.style.overflow = isCartOpen ? "auto" : "hidden";
  };

  const handleToggleClick = () => {
    setRotateButtons(!rotateButtons);
    setHamburgerButton(!hamburgerButton);
  };

  useEffect(() => {
    if (width <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [width]);

  return (
    <div>
      <header className={`py-3 ${styles.header}`}>
        <MDBContainer className="">
          <MDBRow className="align-items-center">
            <MDBCol md="8" className="mb-2">
              <MDBRow className="">
                <MDBCol className="mt-1 col-2 d-flex justify-content-end">
                  {isExpanded && (
                    <button
                      className={`${styles.navbarToggler}`}
                      type="button"
                      onClick={handleToggleClick}
                      style={{
                        transform: rotateButtons ? "rotate(360deg)" : "rotate(0)",
                        transition: "all 0.3s linear",
                      }}
                    >
                      {hamburgerButton ? (
                        <MDBIcon className="fas fa-align-justify" />
                      ) : (
                        <MDBIcon className="fas fa-times" />
                      )}
                    </button>
                  )}
                </MDBCol>
                <MDBCol
                  md="8"
                  className="mb-2 d-flex justify-content-center col-8"
                >
                  <Link to="/" className={`${styles.logoLink}`}>
                    <img
                      src={psllogo}
                      alt="Logo"
                      style={{
                        width: "80px",
                        height: "50px",
                        marginRight: "5px",
                        marginLeft: "0px",
                        marginTop: "15px",
                      }}
                    />
                    <h1
                      className={styles.storeName}
                      style={{
                        marginTop: "15px",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "3em",
                        color: "#FFFFFF",
                        textTransform: "uppercase",
                        letterSpacing: "3px",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
                        backgroundImage: "linear-gradient(90deg, #4CAF50, #8BC34A)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        animation: "glow 1.5s ease-in-out infinite alternate",
                      }}
                    >
                      PSL PlayBook
                    </h1>
                  </Link>
                </MDBCol>
              </MDBRow>
            </MDBCol>

            <MDBCol
              md="4"
              className={`d-flex justify-content-center ml-xs-auto col-6 mt-1 ${
                isExpanded && !hamburgerButton ? "flex-column" : ""
              }`}
            >
              <Link
                to="/login"
                className={`${styles.userIcon} ${styles.linkStyle}`}
              >
                <FaUser />
              </Link>
              <span className={`m-1 p-2 ${styles.linkItem}`}>
                <Link to="/login" className={styles.linkStyle}>
                  Login
                </Link>
              </span>
              <Link
                to="/signup"
                className={`${styles.userIcon} ${styles.linkStyle}`}
              >
                <FaUser />
              </Link>
              <span className={`m-1 p-2 ${styles.linkItem}`}>
                <Link to="/signup" className={styles.linkStyle}>
                  Sign Up
                </Link>
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </header>
      {(isExpanded && !hamburgerButton && <Header3Component />) ||
        (!isExpanded && <Header3Component />)}
    </div>
  );
};

export default Header2Component;
