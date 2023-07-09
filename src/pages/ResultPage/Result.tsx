import "./Result.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Result() {
  const [advice, setAdvice] = useState("");
  const location = useLocation();
  const randomNumber = new URLSearchParams(location.search).get("randomNumber");

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        const { advice } = response.data.slip;
        setAdvice(advice);
      } catch (error) {
        console.log("Error fetching advice:", error);
      }
    };

    fetchAdvice();
  }, []);
  return (
    <div className="result">
      <div className="item1">
        <div>
          <h3>You roll up {randomNumber}</h3>
        </div>
        <div className="quote">''{advice}''</div>

        <div className="pick">
          <button className="green">
            <Link className="link" to="/">
              Go to Home
            </Link>
          </button>
          <button className="orange">
            <Link className="link" to="/animationDice">
              Try Again
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;
