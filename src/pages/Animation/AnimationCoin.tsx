import "./Animation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

function AnimationCoin() {
  useEffect(() => {
    const randomChoice = Math.random() < 0.5 ? "Heads" : "Tails";
    const redirectTimeout = setTimeout(() => {
      window.location.href = `/resultCoin?choice=${randomChoice}`;
    }, 3000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <div className="animation">
      <div className="coin">
        <FontAwesomeIcon
          icon={faBitcoin}
          size="10x"
          spin
          style={{ color: "#22684a" }}
        />

        <h2>Coin is flipping....</h2>
      </div>
    </div>
  );
}

export default AnimationCoin;
