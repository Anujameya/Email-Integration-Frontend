import React from 'react';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-filter-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by Subject, From, or Email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
