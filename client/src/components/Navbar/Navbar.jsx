import "./Navbar.css";
import logo from "../../assets/images/logo.jpg";

function Navbar() {
  return (
    <nav>
      <div className="main-nav container flex">

        <div className="company-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="nav-links">
          <ul className="flex">
            <li className="hover-link">Sports</li>
            <li className="hover-link">Finance</li>
            <li className="hover-link">Politics</li>
          </ul>
        </div>

        <div className="search-bar flex">
          <input
            type="text"
            placeholder="Search News..."
            className="news-input"
          />

          <button className="search-button">
            Search
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;