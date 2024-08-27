

import Image from 'next/image';
import styles from './page.module.css';
import drone from '/src/drone.jpeg';
import nemo from '/src/nemo.jpg';
import mini from '/src/mini.png';
import nintendo from '/src/nintendo.jpeg';
import UCL from '/src/UCL.jpg';
import snitch from '/src/snitch.png';
import wheel from '/src/wheel.png';
import plane1 from '/src/plane1.png';

const ModelsPage = () => {
  const images = [
    { src: drone, name: 'Drone' },
    { src: UCL, name: 'UCL' },
    { src: nintendo, name: 'Nintendo' },
    { src: nemo, name: 'Nemo' },
    { src: plane1, name: 'Plane1' },
    { src: mini, name: 'Mini' },
    { src: snitch, name: 'Snitch' },
    { src: wheel, name: 'Wheel' },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My 3D Models</h1>
      <h2 className={styles.subtitle}>From quirky abstract shapes to just random stuff, I’ve had a 3D-licious time designing these models and trying out new techniques! 🎨</h2>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.name}
                layout="fill"
                objectFit="contain"
                className={styles.image}
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsPage;
