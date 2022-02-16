import facebook from "../Images/FacebookIcon.png";
import github from "../Images/GitHubIcon.png";
import instagram from "../Images/InstagramIcon.png";
import linkedin from "../Images/LinkedinIcon.png";
function Icons() {
  return (
    <div className="icons-conteiner">
      <a href="https://www.facebook.com/ciza13" target={"_blank"}>
        <img src={facebook}></img>
      </a>
      <a href="https://github.com/husicmirza" target={"_blank"}>
        <img src={github}></img>
      </a>
      <a href="https://www.instagram.com/ciizzaa/?hl=hr" target={"_blank"}>
        <img src={instagram}></img>
      </a>
      <a href="https://www.linkedin.com/in/mirzahusic/" target={"_blank"}>
        <img src={linkedin}></img>
      </a>
    </div>
  );
}
export default Icons;
