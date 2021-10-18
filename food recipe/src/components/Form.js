import React, { useRef, useEffect } from "react";

const Form = ({ inputText, setInputText, onSubmit }) => {

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus(), [])

  return (
    <div className="form-container">
      <h1>Food Recipe Plaza</h1>
      <form className="searchForm">
        <input
          type="text"
          placeholder="Enter Foodname"
          className="inputBox"
          value={inputText}
          onChange={inputTextHandler}
          ref={inputRef}
        />
        <button type="submit" className="searchBtn" onClick={onSubmit}>
          Search
        </button>
      </form>
      <h3>Search Above to get the recipe of any food!</h3>
    </div>
  );
};

export default Form;
