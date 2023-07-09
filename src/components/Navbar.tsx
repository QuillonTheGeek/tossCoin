import "./Navbar.scss";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <h4>Made with React Typcript ---</h4>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
