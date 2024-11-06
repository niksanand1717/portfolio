import { SkillsContainer } from "../styles/SkillsStyles";
import JavascriptSvgIcon from "./../assets/javascript-svgrepo-com.svg";
import ReactSvgIcon from "./../assets/react.svg";
import NodeSvgIcon from "./../assets/nodejs-svgrepo-com.svg";
import CssSvgIcon from "./../assets/css-3-svgrepo-com.svg";
import HtmlSvgIcon from "./../assets/html-5-svgrepo-com.svg";
import MysqlSvgIcon from "./../assets/mysql-svgrepo-com.svg";
import MongodbSvgIcon from "./../assets/mongodb-svgrepo-com.svg";
import NextjsSvgIcon from "./../assets/nextjs-fill-svgrepo-com.svg";
import GcpSvgIcon from "./../assets/gcp-svgrepo-com.svg";

const skills = [
  { name: "JavaScript", icon: JavascriptSvgIcon },
  { name: "React", icon: ReactSvgIcon },
  { name: "Node.js", icon: NodeSvgIcon },
  { name: "MongoDB", icon: MongodbSvgIcon },
  { name: "MySQL", icon: MysqlSvgIcon },
  { name: "Next.js", icon: NextjsSvgIcon },
  { name: "HTML", icon: HtmlSvgIcon },
  { name: "CSS", icon: CssSvgIcon },
  { name: "Google Cloud Platform", icon: GcpSvgIcon },
];

const skillsItems = skills.map((skill, index) => (
  <div className="skill-item" key={index}>
    <img src={skill.icon} alt="JavaScript Icon" width="40" height="40" />
    <p>{skill.name}</p>
  </div>
));

function Skills() {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <div className="skills-grid">{skillsItems}</div>
    </SkillsContainer>
  );
}

export default Skills;
