import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import styles from "./Certifications.module.css";
import javascript from "../../Assets/javascript-course-the-complete-guide.webp";
import react from "../../Assets/react-course-the-complete-guide.webp";
import freecodecamp from "../../Assets/freecode.webp";

function Certifications() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Certifications </h2>
      <div className={styles.wrapper}>
        <CourseCard
          title="JAVASCRIPT - The Complete Guide 2022"
          img={javascript}
          courseAuthor={"Academind"}
          link="https://academind.com/"
        />
        <CourseCard
          title="React - The Complete Guide (incl Hooks, React Router, Redux"
          img={react}
          courseAuthor={"Academind"}
          link="https://academind.com/"
        />
        <CourseCard
          title="Responsive Web Design Certification"
          img={freecodecamp}
          courseAuthor="FreeCodeCamp"
          link="https://www.freecodecamp.org/certification/Moises-devs/responsive-web-design"
        />
        <CourseCard
          title="Front End Development Libraries"
          img={freecodecamp}
          courseAuthor="FreeCodeCamp"
          link="https://www.freecodecamp.org/Moises-devs"
        />
      </div>
    </section>
  );
}

export default Certifications;
