import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiRedux, SiStrapi, SiMaterialui } from "react-icons/si";
import everdayimg from "../../Assets/everydayculture.png";
import restimg from "../../Assets/restaurant.png";
import feedbackimg from "../../Assets/feedback.png";
export const data = [
  {
    id: 1,
    name: "EverDay Culture",
    link: "http://google.com/",
    code: "http://google.com/",
    img : everdayimg,
    description:
      "Ecommerce Store fully reponsive and managed by Redux. This project emphasizes the use of React Router and state management in effort to build large applications. ",
    skills: [
        { name: "ReactJS", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Strapi", icon: <SiStrapi /> },
      { name: "materialUI", icon: <SiMaterialui /> },
    ],
  },
  {
    id: 2,
    name: "Resturant Reactive Website",
    link: "https://moises-devs.github.io/TheValet/",
    code: "https://github.com/moises-devs/TheValet",
    img:restimg,
    description:
      "Built with React, this project utilizes an Italiani Food API, fully responsive",
    skills: [
        { name: "ReactJS", icon: <FaReact /> },
    ],
  },
  {
    id: 3,
    name: "FeedBack Tracker",
    link: "https://moises-devs.github.io/Feedback-Tracker/",
    code: "https://github.com/moises-devs/Feedback-Tracker",
    img:feedbackimg,
    description:
      "Created using React, this project emphasizes the useage of mobile like features on a form that can be used as a survey. ",
    skills: [
      {
        name: "html",
        icon: <AiFillHtml5 />,
      },
      {
        name: "css",
        icon: <FaCss3Alt />,
      },
      {
        name: "ReactJS",
        icon: <FaReact />,
      },
    ],
  },
];
