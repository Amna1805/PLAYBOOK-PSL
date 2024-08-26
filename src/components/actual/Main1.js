import React from 'react';
import styles from '../../css/myfile.module.css';
import Slider from './Slider'; 
import Sliderteam from './Sliderteam';


function Main1() {
  

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={`row ${styles.row}`}>
        {/* Slider will take full width on small screens */}
        <div className={`col-md-12 col-12 d-flex justify-content-center align-items-center ${styles.rightColumn}`}>
          <Slider />
        </div>
        {/* Teams will stack on small screens */}
        {/* <div className={`col-md-4 col-12 ${styles.leftColumn}`}>
          <Sliderteam teams={teams} />
        </div> */}
      </div>
    </div>
  );
}

export default Main1;
