import PropTypes from "prop-types";
import Button from "../../shared/Button";

export default function ProductsFilter({ filterData }) {
  const keyWords = ["all", "men's clothing", "women's clothing", "electronics", "jewelery"];

  return (
    <div>
      {keyWords.map(word => (
        <Button
          key={word}
          type="normal"
          text={word.charAt(0).toUpperCase() + word.slice(1)}
          onClick={() => filterData(word)}
        />
      ))}
    </div>
  );
}

ProductsFilter.propTypes = {
  filterData: PropTypes.func.isRequired,
};
