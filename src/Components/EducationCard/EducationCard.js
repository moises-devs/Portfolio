import React from "react";
import styles from "./EducationCard.module.css";
function EducationCard(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgwrapper}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.card}>
        <div className={styles.cardheading}>
          <h2 className={styles.title}>{props.title}</h2>
          <h3 className={styles.subtitle}>{props.subtitle}</h3>
          <h4 className={styles.date}>{props.date}</h4>
        </div>
        <div className={styles.carddetails}>
        <ul className={styles.details}>{props.children}</ul>
        <a href={props.link} target="_blank" rel="noreferrer" className={styles.cardbtn}>Visit Website</a>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
