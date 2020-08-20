import React, { Component } from "react";

const API_KEY = "4287ad07";
export class SearchForm extends Component {
  state = {
    inputMovie: "",
  };

  handleChange = (movie) => {
    this.setState({ inputMovie: movie.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const inputMovie = this.state.inputMovie;
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then((res) => res.json())
      .then((data) => {
        const { Search = [], totalResults = "0" } = data;
        console.log({ Search, totalResults });
        this.props.onResults(Search);
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this.handleChange}
              type="text"
              placeholder="Movie to search"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
