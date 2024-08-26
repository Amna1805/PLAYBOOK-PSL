import styles from '../../css/myfile.module.css'; 
import TextTransition, { presets } from 'react-text-transition';
import { useState,useEffect } from 'react';
const TEXTS = ['PSL LEAGUE 2024', 'Pakistan No 1 League','Who will Win,Predict now'];
const Header1Component = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, 
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
     <div className={`text-white text-center py-2 ${styles.header}`}>
      <TextTransition className="m-0 d-flex justify-content-center" springConfig={presets.wobbly}><strong>{TEXTS[index % TEXTS.length]}</strong></TextTransition>
    </div>
  );
};

export default Header1Component;