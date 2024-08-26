import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../images/psl.jpeg';
import slider2 from '../../images/psldet.jpg_large';
import slider3 from '../../images/matchdet.jpg_large';
import styles from '../../css/myfile.module.css';

function Slider() {
    return (
        <div className={styles.carouselContainer}>
          <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            stopOnHover={false}
            infiniteLoop={true}
            autoPlay={true}
            swipeable={true}
            dynamicHeight={true}
            interval={2000}
            className={styles.customCarousel}
          >
            <div>
              <img src={slider1} alt="Slide 1" className={styles.sliderimage} />
            </div>
            <div>
              <img src={slider2} alt="Slide 2" className={styles.sliderimage} />
            </div>
            <div>
              <img src={slider3} alt="Slide 3" className={styles.sliderimage} />
            </div>
          </Carousel>
        </div>
      );
}

export default Slider;
