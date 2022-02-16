import PersonalImage from "./Components/PersonalImage";
import Header from "./Components/Header";
import About from "./Components/About";
import Interests from "./Components/Interests";
import Icons from "./Components/Icons";
function Card() {
  return (
    <div className="card-conteiner">
      <PersonalImage></PersonalImage>
      <Header></Header>
      <About></About>
      <Icons />
    </div>
  );
}
export default Card;
