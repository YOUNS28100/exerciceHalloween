import logo from "../assets/_93354f6d-a3c4-48ef-b54a-e65884d04ed8.jpeg";
import "./Header.scss";
import PropTypes from "prop-types";

const Header = ({ counter }) => {
  return (
    <>
      <section className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <span className="name">DOOT</span>
        <div className="menu">
          <span>Panier {counter}</span>
        </div>
      </section>
    </>
  );
};

Header.propTypes = {
  counter: PropTypes.number.isRequired,
};

export default Header;
