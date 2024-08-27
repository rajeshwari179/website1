// components/EducationItem.js
import Image from 'next/image';
import styles from './EducationItem.module.css';

const EducationItem = ({ imageSrc, altText, institution, degree, period, courses }) => {
  return (
    <div className={styles.educationBox}>
      <Image src={imageSrc} alt={altText} width={65} height={65} />
      <h5>{institution}</h5>
      <h4>{degree}</h4>
      <h3>{period}</h3>
      <h2>Relevant Courses:</h2>
      <p>{courses}</p>
    </div>
  );
};

export default EducationItem;
