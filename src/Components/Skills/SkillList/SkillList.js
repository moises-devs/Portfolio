import styles from "./SkillList.module.css";
import SkillItem from "../SkillItem/SkillItem";
function SkillList(props) {
  return (
    <ul className={styles.listwrapper}>
      {props.skills.map((skill, index) => (
        <SkillItem key={`${index}${skill.name}`}name={skill.name} render={skill.icon} />
      ))}
    </ul>
  );
}

export default SkillList;
