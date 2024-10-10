import React from 'react';
import styles from './styles.module.css';
import bg1 from './bg1.png';

const AchievementsTag = () => {
    return (
      <div className={styles.body}>
        <h2>OUR achievements</h2><br />
        
          <div className={styles.achievement}>
            <img src={bg1} alt="Background 1" />
            <div className={styles.info}>
              <h3>ACHIEVEMENT_1</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perspiciatis illo ullam saepe eligendi pariatur rerum veritatis quisquam vel quae, odio tempore at rem, doloremque placeat, illum odit voluptatem modi. Exercitationem ipsa vitae autem harum, quia, amet corporis ut quis dolores incidunt, labore suscipit corrupti eos deserunt minima cumque praesentium. Sed perspiciatis omnis temporibus deleniti facilis veniam quibusdam ex harum.</p>
            </div>
          </div>
          <div className={styles.achievement}>
            <div className={styles.info}>
              <h3>ACHIEVEMENT_2</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perspiciatis illo ullam saepe eligendi pariatur rerum veritatis quisquam vel quae, odio tempore at rem, doloremque placeat, illum odit voluptatem modi. Exercitationem ipsa vitae autem harum, quia, amet corporis ut quis dolores incidunt, labore suscipit corrupti eos deserunt minima cumque praesentium. Sed perspiciatis omnis temporibus deleniti facilis veniam quibusdam ex harum.</p>
            </div>
            <img src={bg1} alt="Background 1" />
          </div>
          <div className={styles.achievement}>
            <img src={bg1} alt="Background 1" />
            <div className={styles.info}>
              <h3>ACHIEVEMENT_3</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perspiciatis illo ullam saepe eligendi pariatur rerum veritatis quisquam vel quae, odio tempore at rem, doloremque placeat, illum odit voluptatem modi. Exercitationem ipsa vitae autem harum, quia, amet corporis ut quis dolores incidunt, labore suscipit corrupti eos deserunt minima cumque praesentium. Sed perspiciatis omnis temporibus deleniti facilis veniam quibusdam ex harum.</p>
            </div>
          </div>
        
      </div>
    )
  }

export default AchievementsTag;