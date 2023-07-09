// import "./Animation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { faDice } from "@fortawesome/free-solid-svg-icons";

function AnimationDice() {
  useEffect(() => {
    const randomNumber = Math.ceil(Math.random() * 6);

    const redirectTimeout = setTimeout(() => {
      window.location.href = `/result?randomNumber=${randomNumber}`;
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="animation">
      <div className="dice">
        <div>
          <FontAwesomeIcon
            icon={faDice}
            spin
            pulse
            size={"10x"}
            style={{ color: "#22684a" }}
          />
        </div>
        <h2>Dice is rolling....</h2>
      </div>
    </div>
  );
}

export default AnimationDice;
