import React, { useState, useContext } from "react";
import { Form, FormControl, Row } from "react-bootstrap";
import WeatherContext from "../../context/weatherContext";
import Error from "../layout/Error";
export const Search = (props) => {
  const [text, setText] = useState("");
  const weatherContext = useContext(WeatherContext);
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
     
    } else {
      // props.handleData(text)
      weatherContext.searchWeather(text);
      weatherContext.getDaysWeather(text);
      setText("");
    }
  };

  return (
    <Row className="justify-content-md-center my-3">
      <Form
        className="search-loaction"
        style={{ width: "18rem" }}
        onSubmit={onSubmit}
      >
        <FormControl
          type="text"
          name="city"
          placeholder="What city?"
          autoComplete="off"
          className="text-muted p-4 shadow-sm"
          value={text}
          onChange={onChange}
        />
      </Form>
    </Row>
  );
};
export default Search;
