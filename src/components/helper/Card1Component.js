import React, { useEffect, useState, useRef } from "react";
import Card from "react-bootstrap/Card";
import slider2 from "../../images/naseem.jpg";

import styles from "../../css/myfile.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Link } from "react-router-dom"; 
function Card1Component({ width }) {
  const { width: screenWidth } = useWindowDimensions();
  const [isExpanded, setExpanded] = useState(false);
  const [display, setDisplay] = useState("none");
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (screenWidth <= 768) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [screenWidth]);

  const handlePlusButtonClick = () => {
    setShowOverlay(!showOverlay);
    document.body.style.overflow = showOverlay ? "auto" : "hidden";
  };

  return (
    <>
      <Card
        style={{
          width: width,
        }}
        className="m-3 p-2"
        onMouseEnter={() => setDisplay("flex")}
        onMouseLeave={() => setDisplay("none")}
      >
         <Link to="/view-player"  className={styles.linkstyle}>
        <Card.Img variant="top" src={slider2} style={{ height: '200px' }} />
        </Link>
        <Card.Body>
        <Link to="/view-player" className={styles.linkstyle}>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Text>
            <h6 style={{ color: 'green' }}>Bowler </h6>
            <h6 style={{ color: 'green' }}>Wickets:11 </h6>
            <h6 style={{ color: 'green' }}>Runs:5555 </h6>
          </Card.Text>
          <Card.Text>
            {/* <div className={styles.testimonialStars}>

              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
              <FontAwesomeIcon icon={faStar} className={styles.starIcon} />

            </div> */}
          </Card.Text>
        </Link>
          
        </Card.Body>

      </Card>
     
    </>
  );
}

export default Card1Component;
