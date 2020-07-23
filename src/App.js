import React, { Fragment, useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import Error from "./Components/Error";

function App() {
  // States
  const [search, updateSearch] = useState({
    city: "",
    country: "",
  });
  const [query, updateQuery] = useState(false);
  const [result, updateResult] = useState({});
  const [error, switchError] = useState(false);

  //destructuring search
  const { city, country } = search;

  useEffect(() => {
    // console.log(city)
    // updateQuery(false);
    const readAPI = async () => {
      if (query) {
        const appId = "75ec1b46b2d8e194f931659ddb24ca64";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const response = await fetch(url);
        const result = await response.json();

        updateResult(result);
        updateQuery(false);

        //Valid response?
        if (result.cod === "404") {
          switchError(true);
        } else {
          switchError(false);
        }
      }
    };
    readAPI();
    // eslint-disable-next-line
  }, [query]);

  let validateComponent;
  if (error) {
    validateComponent = <Error message="No results" />;
  } else {
    validateComponent = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title="Weather React App" />

      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form
                search={search}
                updateSearch={updateSearch}
                updateQuery={updateQuery}
              />
            </div>
            <div className="col s12 m6">
              {validateComponent}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
