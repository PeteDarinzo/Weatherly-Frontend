import React, { useState } from "react";


const MovieSearchForm = ({ getMovies }) => {

  const intialState = {
    title: ""
  }

  const [formData, setFormData] = useState(intialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(formData.title);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter title" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default MovieSearchForm;