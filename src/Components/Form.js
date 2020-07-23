import React, { useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

const Form = ({ search, updateSearch, updateQuery }) => {
  //States
  const [error, switchError] = useState(false);

  //destructuring search
  const { city, country } = search;

  //get values from de form
  const handleChange = (e) => {
    updateSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  //form submited
  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if (city.trim() === "" || country.trim() === "") {
      switchError(true);
      return;
    }

    switchError(false);

    //send to app
    updateQuery(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="All the fields are requireds" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-Select Country-</option>
          <option value="NI">Nicaragua</option>
          <option value="US">Estados Unidos</option>
          <option value="CR">Costa Rica</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="ES">España</option>
        </select>
        <label htmlFor="country">Pais</label>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          value="View Weather"
          className="waves-effect waves-light btn-large btn-block grey lighten-3"
        />
      </div>
    </form>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  updateSearch: PropTypes.func.isRequired,
  updateQuery: PropTypes.func.isRequired
}


export default Form;
