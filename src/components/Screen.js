import "../assets/css/Screen.css";
import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
  return (
    <Textfit className="Screen" mode="single" max={70}>
      {value}
    </Textfit>
  );
};

export default Screen;
