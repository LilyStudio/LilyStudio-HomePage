import React from 'react';
import styles from './Banner.css';

function Banner({image, title, intro}) {
  return (
    <div className={styles.banner}>
      <div className={styles.image_wrapper}>
        <div className={styles.image} style={{backgroundImage: `url(${image})`}}/>
      </div>

      <div className={styles.text_wrapper + ' container'}>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </div>
  );
}

export default Banner;
