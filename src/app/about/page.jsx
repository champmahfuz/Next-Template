import Image from "next/image";
import style from "./about.module.css";
import AboutButton from "./button";
// import icon from "/assets/icon.png";
const icon = "/assets/icon.png";

const AboutPage = () => {
  return (
    <div>
      <h1 className={style.title}> AboutPage</h1>
      <Image src={icon} height={80} width={80} alt="img" />
      <AboutButton />
    </div>
  );
};

export default AboutPage;
