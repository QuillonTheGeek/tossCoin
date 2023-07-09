import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container">
      <div className="title">
        <h1>A FLIP FOR A TIP</h1>
        <p>An advice generating app by Quillon </p>
      </div>
      <div>
        <button>
          <Link className="link" to="/select">
            Start now
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
