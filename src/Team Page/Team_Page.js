import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import Aryav from './Team member photos/Aryav.jpeg';
import Khush from './Team member photos/Khush.jpg';
import Nipun1 from './Team member photos/Nipun gupta.jpeg';
import Yash from './Team member photos/Yash.jpg';
import Nipun2 from './Team member photos/Nipun raj.jpg';
import Yuvraj from './Team member photos/Yuvraj.jpg';

const Team = () => {
  const imageContainerRef1 = useRef(null);
  const imageContainerRef2 = useRef(null);
  const imageContainerRef3 = useRef(null);
  const imageContainerRef4 = useRef(null);
  const imageContainerRef5 = useRef(null);

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

    const imageContainers = [imageContainerRef1.current, imageContainerRef2.current, imageContainerRef3.current , imageContainerRef4.current , imageContainerRef5.current];
    imageContainers.forEach(container => {
      if (container) {
        observer.observe(container);
      }
    });

    return () => {
      imageContainers.forEach(container => {
        if (container) {
          observer.unobserve(container);
        }
      });
    };
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.teambox}>
        <div className={styles.info}>
          <h1>Meet our Team</h1>
          <p>A passionate group of students and professionals</p>
        </div>

        <div className={styles.imagecontainer} ref={imageContainerRef1}>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Aryav} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Khush} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun1} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yash} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun2} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yuvraj} alt="Cartoon 2" /></div>
        </div>

        <p>Departments</p>
        <div className={` ${styles.depart}`}>
          <h2>SOFTWARE</h2>
          <div className={styles.depart_info}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque perspiciatis illo ullam saepe eligendi pariatur rerum veritatis quisquam vel quae, 
              odio tempore at rem, doloremque placeat, illum odit voluptatem modi. Exercitationem ipsa vitae autem harum, quia, 
              amet corporis ut quis dolores incidunt, labore suscipit corrupti eos deserunt minima cumque praesentium. Sed perspiciatis omnis temporibus deleniti 
              facilis veniam quibusdam ex harum.
            </p>
          </div>
        </div>

        <div className={styles.imagecontainer} ref={imageContainerRef2}>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Aryav} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Khush} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun1} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yash} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun2} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yuvraj} alt="Cartoon 2" /></div>
        </div>

        <div className={` ${styles.depart}`}>
          <h2>ELECTRONICS</h2>
          <div className={styles.depart_info}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque perspiciatis illo ullam saepe eligendi pariatur rerum veritatis quisquam vel quae, 
              odio tempore at rem, doloremque placeat, illum odit voluptatem modi. Exercitationem ipsa vitae autem harum, quia, 
              amet corporis ut quis dolores incidunt, labore suscipit corrupti eos deserunt minima cumque praesentium. Sed perspiciatis omnis temporibus deleniti 
              facilis veniam quibusdam ex harum.
            </p>
          </div>
        </div>

        <div className={styles.imagecontainer} ref={imageContainerRef3}>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Aryav} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Khush} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun1} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yash} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun2} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yuvraj} alt="Cartoon 2" /></div>
        </div>

        <div className={` ${styles.depart}`}>
          <h2>MECHANICAL</h2>
          <div className={styles.depart_info}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque perspiciatis illo ullam saepe eligendi pariatur rerum veritatis quisquam vel quae, 
              odio tempore at rem, doloremque placeat, illum odit voluptatem modi. Exercitationem ipsa vitae autem harum, quia, 
              amet corporis ut quis dolores incidunt, labore suscipit corrupti eos deserunt minima cumque praesentium. Sed perspiciatis omnis temporibus deleniti 
              facilis veniam quibusdam ex harum.
            </p>
          </div>
        </div>

        <div className={styles.imagecontainer} ref={imageContainerRef4}>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Aryav} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Khush} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun1} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yash} alt="Cartoon 2" /></div>
          <div className={`${styles.ph1} ${styles.image}`}><img src={Nipun2} alt="Cartoon 1" /></div>
          <div className={`${styles.ph2} ${styles.image}`}><img src={Yuvraj} alt="Cartoon 2" /></div>
        </div>

        <div className={` ${styles.depart}`}>
          <h2>DESIGN AND CONTENT</h2>
          <div className={styles.depart_info}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque perspiciatis illo ullam saepe eligendi pariatur rerum veritatis quisquam vel quae, 
              odio tempore at rem, doloremque placeat, illum odit voluptatem modi. Exercitationem ipsa vitae autem harum, quia, 
              amet corporis ut quis dolores incidunt, labore suscipit corrupti eos deserunt minima cumque praesentium. Sed perspiciatis omnis temporibus deleniti 
              facilis veniam quibusdam ex harum.
            </p>
          </div>
        </div>

        <div className={styles.imagecontainer} ref={imageContainerRef5}>
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
