import React, { useState } from 'react'
import styles from "./ExperienceList.module.css"
import { data } from "./ExperienceData";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ExperienceTab from './ExperienceTab/ExperienceTab';
function ExperienceList() {
  const [selected, setSelected] = useState(null);
  const handleSelected = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index)
  };
  return (
    <div className={styles.wrapper}>
      {data.map((item, index) => (
        <div  className={styles.item + " " +  (selected === index ? styles.activeitem : '')} onClick={handleSelected.bind(null, index)} 
        key={index}>
          <div className={styles.titlewrapper}>
            <h2>{item.title}</h2>
            {selected === index ?  <AiOutlineMinus className={styles.icon}/> :
            <AiOutlinePlus className={styles.icon}/>}
          </div>
          <div  className={styles.content + " " +  (selected === index ? styles.activecontent : '')}>
            {item.experiences.map(object => <ExperienceTab  {...object} key={object.id}/>)}
          </div>
        </div>
))}
    </div>
  )
}

export default ExperienceList