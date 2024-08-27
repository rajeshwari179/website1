import React from 'react';
import Image from 'next/image';
import styles from './Timeline.module.css';

const TimelineEvent = ({ role, title, date, description, image, position }) => {
  const bulletPoints = description.split('. ').map((point, index) => (
    <li key={index}>{point}</li>
  ));

  return (
    <div className={`${styles.container} ${position === 'left' ? styles.left : styles.right}`}>
      <Image src={image} alt={title} className={styles.Image} width={60} height={60} />
      <div className={styles.textBox}>
        <h2>{role}</h2>
        <h3>{title}</h3>
        <small>{date}</small>
        <ul className={styles.bulletPoints}>{bulletPoints}</ul>
      </div>
    </div>
  );
};

const Timeline = ({ events }) => {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <TimelineEvent 
          key={index}
          role={event.role}
          title={event.title}
          date={event.date}
          description={event.description}
          image={event.image}
          position={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default Timeline;
