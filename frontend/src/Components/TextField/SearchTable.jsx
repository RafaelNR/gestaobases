import React from "react";
import { TextField } from '@mui/material';

// CONTEXT
import useTable from "@/Contexts/TableContext";

const SearchTextField = ({ placeholder = null, }) => {
  const { setSearch, setPage } = useTable();

  return (
    <TextField
      fullWidth
      sx={{ ml: 2, mr: 2, width: 250 }}
      placeholder={placeholder ? placeholder : "Buscar…"}
      size="small"
      type="search"
      inputProps={{ "aria-label": "search" }}
      onKeyDown={e => {
        if (e.key === "Enter") {
          setSearch(e.target.value);
          setPage(0);
        }
      }}
    />
  );
}


export default SearchTextField;