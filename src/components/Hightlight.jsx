import "./Hightlight.scss";
import PropTypes from "prop-types";

function Highlight({ list, setCounter }) {
  const finder = list.find((l) => l.category === "gnomes");
  const handleClick = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <>
      <div className="highlight">
        <span className="highlighted">! HIGHLIGHTED !</span>
        <h2>{finder.name}</h2>
        <img src={finder.image} alt="Non disponible" />
        <div className="info">
          {finder && <p>Price: {finder.prix}</p>}
          <p>Stock: {finder.stock}</p>
          <p>Description: {finder.description}</p>
          <p>category: {finder.category}</p>
        </div>
        <button type="button" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

Highlight.propTypes = {
  list: PropTypes.array.isRequired,
  setCounter: PropTypes.func.isRequired,
};
export default Highlight;
