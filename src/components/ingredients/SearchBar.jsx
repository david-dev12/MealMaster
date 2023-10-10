import React, { useState } from "react";

import { Box, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

function debounce(func, delay) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function SearchBar({ query, setQuery }) {
  const [searchText, setSearchText] = useState(query);
  const handleSearch = (searchText) => {
    setQuery(searchText);
  };
  const debouncedHandleSearch = debounce(handleSearch, 300);

  const handleInputChange = (e) => {
    const newSearchText = e.target.value;
    setSearchText(newSearchText);
    debouncedHandleSearch(newSearchText);
  };

  return (
    <Box p={3}>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchText}
        onChange={handleInputChange}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px",
          },
        }}
      />
    </Box>
  );
}

export default SearchBar;
