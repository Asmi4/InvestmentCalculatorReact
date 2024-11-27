import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import { useState } from "react";
import Results from "./Components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />

      {!inputIsValid && (
        <p className="center">
          Please enter duration value greater than or equal to 1
        </p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
