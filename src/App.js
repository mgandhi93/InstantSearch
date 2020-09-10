import React, { Component } from 'react';
import PropTypes from 'prop-types';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  Highlight,
  connectSearchBox,
  ClearRefinements,
  CurrentRefinements,
  RefinementList,
  Pagination,
  PoweredBy,
} from 'react-instantsearch-dom';
import Autocomplete from './AutoComplete';
import './App.css';

const VirtalSearchBox = connectSearchBox(() => null);

const searchClient = algoliasearch(
  'QBE3NXD3HZ',
  '0b63627a2efff1c9f74bbe7c9b6fb1e8'
);

class App extends Component {
  state = {
    query: '',
  };

  onSuggestionSelected = (_, { suggestion }) => {
    this.setState({
      query: suggestion.name,
    });
  };

  onSuggestionCleared = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">Concerts Listings</a>
          </h1>
          <p className="header-subtitle">
            using{' '}
            <a href="https://github.com/algolia/react-instantsearch">
              React InstantSearch
            </a>
            {' with Autocomplete'}
          </p>
        </header>
        <div className="container">
          <InstantSearch indexName="concerts" searchClient={searchClient}>
            <Autocomplete
              onSuggestionSelected={this.onSuggestionSelected}
              onSuggestionCleared={this.onSuggestionCleared}
            />
          </InstantSearch>

          <InstantSearch indexName="concerts" searchClient={searchClient}>
            <div className="left-panel">
              <h2>Name</h2>
              <ClearRefinements />
              <CurrentRefinements />
              <RefinementList
                attribute={"name"}
                showMore={true}
              />

              <Configure hitsPerPage={20} />
            </div>
            <VirtalSearchBox defaultRefinement={query} />
            <Hits hitComponent={Hit} />
            <div className="pagination">
              <Pagination />
            </div>
            <div className="poweredBy">
              <PoweredBy />
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

function Hit(props) {
  return (
    <div>
      <div className="hit-name">
        <Highlight attribute="name" hit={props.hit} />
      </div>
      <div className="hit-location">
        <Highlight attribute="location" hit={props.hit} />
      </div>
      <div className="hit-date">
        <Highlight attribute="date" hit={props.hit} />
      </div>
    </div>
  );
}


Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
