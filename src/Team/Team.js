import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Aryav from './Team member photos/Aryav.jpeg'
import Khush from './Team member photos/Khush.jpg'
import Nipun1 from './Team member photos/Nipun gupta.jpeg'
import Yash from './Team member photos/Yash.jpg'
import Nipun2 from './Team member photos/Nipun raj.jpg'
import Yuvraj from './Team member photos/Yuvraj.jpg'
const Team = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const imageContainer = imageContainerRef.current;
    if (imageContainer) {
      observer.observe(imageContainer);
    }

    return () => {
      if (imageContainer) {
        observer.unobserve(imageContainer);
      }
    };
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.teambox}>
        <div className={styles.info}>
          <h1>Meet our Team</h1>
          <p>A passionate group of <br />students and professionals</p>
        </div>
        <div className={styles.imagecontainer} ref={imageContainerRef}>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Aryav} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Khush} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun1} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yash} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun2} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yuvraj} alt="Cartoon 2" /></div>
        </div>
      </div>
    </div>
  );
}

export default Team;
