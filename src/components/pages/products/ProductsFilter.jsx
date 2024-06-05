import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../shared/Button";

export default function ProductsFilter({ filterData, keyWords }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleClick = (word) => {
    filterData(word);
    setActiveFilter(word);
  };
  return (
    <div>
      {keyWords.map(word => (
        <Button
          active={activeFilter === word ? true : false}
          key={word}
          type="filter"
          text={word.charAt(0).toUpperCase() + word.slice(1)}
          onClick={() => handleClick(word)}
        />
      ))}
    </div>
  );
}

ProductsFilter.propTypes = {
  filterData: PropTypes.func.isRequired,
  keyWords: PropTypes.arrayOf(PropTypes.string),
};
