import PropTypes from "prop-types";
import "./Body.css";

function Body({ list }) {
  function filtermap(filter, filter2) {
    return (
      <section>
        <h1 className="title">Nains et Gnomes</h1>
        <div className="block">
          {list &&
            list
              .filter(
                (l) => l.category === `${filter}` || l.category == `${filter2}`
              )
              .map((l) => (
                <div className="grid" key={l.name}>
                  {l.stock <= 3 ? (
                    <span className="stock">! Last Items !</span>
                  ) : (
                    <p></p>
                  )}
                  <h2>{l.name}</h2>
                  <img src={l.image} alt="Non disponible" />
                  <div className="info">
                    <p>Price: {l.prix}</p>
                    <p>Stock: {l.stock}</p>
                    <p>Description: {l.description}</p>
                    <p>category: {l.category}</p>
                  </div>
                  <button type="button">Add to Cart</button>
                </div>
              ))}
        </div>
      </section>
    );
  }
  return (
    <section>
      <span>{filtermap("cat")}</span>
      <span>{filtermap("gnomes", "courges")}</span>
      <span>{filtermap("gnomes")}</span>
    </section>
  );
}

Body.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Body;
