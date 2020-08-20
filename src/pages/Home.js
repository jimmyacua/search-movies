import React, { Component } from "react";
import { Title } from "../components/Title";
import { SearchForm } from "../components/SearchForm";
import { MovieList } from "../components/MovieList";

export class Home extends Component {
  state = { usedSearch: false, results: [] };

  handleResults = (results) => {
    this.setState({ results, usedSearch: true });
  };

  renderResults() {
    return this.state.results.length === 0 ? (
      <p>Sorry! Results not found.</p>
    ) : (
      <MovieList movies={this.state.results}></MovieList>
    );
  }
  render() {
    return (
      <div>
        <Title>Search movies</Title>
        <div className="SearchFormWrapper">
          <SearchForm onResults={this.handleResults}></SearchForm>
        </div>
        {this.state.usedSearch ? (
          this.renderResults()
        ) : (
          <small>Use the form to search a movie</small>
        )}
      </div>
    );
  }
}
