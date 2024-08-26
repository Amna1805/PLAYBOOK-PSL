import Footer from '../actual/Footer';
import Header from '../actual/Header';
import Main1 from '../actual/Main1';
import styles from '../../css/myfile.module.css';
import { FaArrowUp } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Card from '../actual/Card'
import Sliderteam from '../actual/Sliderteam';
import karachi from "../../images/karachi.jpg";
import peshawar from "../../images/peshawar.jpeg";
import quetta from "../../images/quetta.jpeg";
import lhr from "../../images/lhr.jpeg";
import isb from "../../images/isb.jpeg";
export default function Home() {
  const [showArrow, setShowArrow] = useState(false);
  const teams = [
    { 
      name: 'Quetta Gladiators', 
      image: quetta, 
      description: 'Quetta Gladiators Team',
      matches: 10, 
      won: 6, 
      lost: 4, 
      wickets: 30, 
      points: 12, 
      runs: 1500
    },
    { 
      name: 'Karachi Kings', 
      image: karachi, 
      description: 'Karachi Kings Team',
      matches: 10, 
      won: 4, 
      lost: 6, 
      wickets: 25, 
      points: 8, 
      runs: 1400
    },
    { 
      name: 'Peshawar Zalmi', 
      image: peshawar, 
      description: 'Peshawar Zalmi Team',
      matches: 10, 
      won: 7, 
      lost: 3, 
      wickets: 35, 
      points: 14, 
      runs: 1600
    },
    { 
      name: 'Islamabad United', 
      image: isb, 
      description: 'Islamabad United Team',
      matches: 10, 
      won: 7, 
      lost: 3, 
      wickets: 35, 
      points: 14, 
      runs: 1600
    },
    { 
      name: 'Lahore Qalandars', 
      image: lhr, 
      description: 'Lahore Qalandars',
      matches: 10, 
      won: 7, 
      lost: 3, 
      wickets: 35, 
      points: 14, 
      runs: 1600
    }
  ];
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Show the arrow when scrolling down, hide when at the top
      setShowArrow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Main1 />
      
      {showArrow && (
        <div className={`${styles.Upward}`} onClick={handleScrollToTop}>
          <FaArrowUp />
        </div>
      )}
        <Sliderteam teams={teams} />
      <Card/>
      <Footer />
    </div>
  );
}
