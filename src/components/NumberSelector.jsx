import styled from "styled-components";

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .flex {
    display: flex;
    gap: 10px; /* Adjusted gap for smaller screens */
    flex-wrap: wrap; /* Allow items to wrap to the next line on smaller screens */
    justify-content: center; /* Center the items on smaller screens */
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px; /* Adjusted margin for spacing */
  }

  .error {
    color: red;
    margin-bottom: 10px; /* Adjusted margin for spacing */
  }

  @media (min-width: 768px) {
    /* Adjust styles for screens with a minimum width of 768px */
    .flex {
      gap: 24px; /* Restore the original gap for larger screens */
    }
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (!props.isSelected ? "#ddd" : "black")};
    color: ${(props) => (props.isSelected ? "#ddd" : "black")};
  }
`;
