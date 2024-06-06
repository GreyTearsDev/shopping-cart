import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import Button from "../../shared/Button";

const Wrapper = styled.div`
  display: flex;
  // styles for when the screen gets too small
  // display: grid;
  // grid-template-column: repeat(auto, minmax(min-content, 1fr) );
  justify-content: center;
  align-content: center;
  gap: 0.5vw;
  padding: clamp(40px, 2vw, 80px) 0;
      
`;

export default function ProductsFilter({ filterData, keyWords }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleClick = (word) => {
    filterData(word);
    setActiveFilter(word);
  };
  return (
    <Wrapper>
      {keyWords.map(word => (
        <Button
          active={activeFilter === word ? true : false}
          key={word}
          type="filter"
          text={word.charAt(0).toUpperCase() + word.slice(1)}
          onClick={() => handleClick(word)}
        />
      ))}
    </Wrapper>
  );
}

ProductsFilter.propTypes = {
  filterData: PropTypes.func.isRequired,
  keyWords: PropTypes.arrayOf(PropTypes.string),
};
