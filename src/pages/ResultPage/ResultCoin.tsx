import "./Result.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function ResultCoin() {
  const [advice, setAdvice] = useState("");
  const location = useLocation();
  const choice = new URLSearchParams(location.search).get("choice");

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
          <h3>You get {choice}</h3>
        </div>
        <div className="quote">{advice}</div>

        <div className="pick">
          <button className="orange">
            <Link className="link" to="/">
              Go to Home
            </Link>
          </button>
          <button className="green">
            <Link className="link" to="/animationCoin">
              Try Again
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCoin;
