import guidedLogo from "../../../Assets/full-guided-compass-logo.png";
import fss from "../../../Assets/fss.jpg";
import davis from "../../../Assets/Primary-Horseweb.webp";
export const data = [
  {
    title: "Work Experience",
    experiences: [
      {
        companyName: "WebProgramming",
        date: "April 2020 - June 2022",
        role: "Full Stack Developer",
        worktype: "Office",
        description:
          "Create interfaces and provide training to backend engineers. Resulted in responsive app completed before deadline, and fostered a strong welcoming space for productivity and learning.",
        companyImg: davis,
        id:1,
      },
      {
        companyName: "Fostering Student Success",
        date: "Feburary 2020 - March 2022",
        role: "Apricot Administrator",
        worktype: "Work from Home/ In person Meetings",
        description:
          "Create and manage Apricot system to meet company need and train staff to use newly implemented systems/work flows. Which resulted in an increased in employee productivty and increased monitoring/meeting of company goals.  Assisted in front end task when needed, including working with wordpress, in order to establish strong branding and recruit more customers.",
        companyImg: fss,
        id:2,
      },
      {
        companyName: "Guided Compass",
        date: "June 2019 - September 2019",
        role: "UI/UX",
        worktype: "Work from Home/ In person Meetings",
        description:
          "Create designs and user interfaces that meet the targeted audiences (highschool students). Worked with front end technologies, including figma, sketch and met weekly to meet client expectations. In the end, my registration user interface was implemented into production, which resulted in quicker user registration and therefore more users on the web applicaiton.",
        companyImg: guidedLogo,
        id:3,
      },
    ],
  },
  {
    title: "Volunteering",
    experiences: [
      {
        description:
          "Interested in collaborating with non-profits and helping business grow, reach out to me :)",
          id:4,
      },
    ],
  },
];
