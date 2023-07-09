import "./Select.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Select() {
  return (
    <div className="select">
      <h1>Select your Choice</h1>
      <div className="container">
        <div className="leftItem">
          <div className="item">
            <FontAwesomeIcon
              icon={faBitcoin}
              size="10x"
              style={{ color: "#22684a" }}
            />
          </div>
          <button className="title">
            <Link className="link" to="/animationCoin">
              <h2>Toss a Coin</h2>
            </Link>
          </button>
        </div>

        <div className="rightItem">
          <div className="item">
            <FontAwesomeIcon
              size="10x"
              icon={faDice}
              style={{ color: "#22684a" }}
            />
          </div>
          <button className="title">
            <Link className="link" to="/animationDice">
              <h2>Roll a Dice</h2>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Select;
