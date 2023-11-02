import "./Hightlight.scss";
import PropTypes from "prop-types";

function Highlight({ list }) {
  const finder = list.find((l) => l.category === "gnomes");

  return (
    <>
      <div className="highlight">
        <h2 className="highlighted">! HIGHLIGHTED !</h2>
        <h2>{finder.name}</h2>
        <img src={finder.image} alt="Non disponible" />
        <div className="info">
          {finder && <p>Price: {finder.prix}</p>}
          <p>Stock: {finder.stock}</p>
          <p>Description: {finder.description}</p>
          <p>category: {finder.category}</p>
        </div>
      </div>
    </>
  );
}

Highlight.propTypes = {
  list: PropTypes.array.isRequired,
};
export default Highlight;
