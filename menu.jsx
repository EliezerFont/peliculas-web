import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import MovieIcon from "@mui/icons-material/Movie";

const Menu = () => {
  return (
    <nav>
      <TextField
        name="buscar"
        placeholder="buscar por nombre, genero o actor"
        style={{ width: 300 }}
      />
      <CloseIcon color="action" style={{ cursor: "pointer" }}>
        close
      </CloseIcon>
      <Button variant="contained">
        <SearchIcon color="action">search</SearchIcon>
        Buscar
      </Button>
      &nsp;
      <Button variant="contained">
        <StarIcon color="action">star</StarIcon>
        Destacadas
      </Button>
      &nsp;
      <Button variant="contained">
        <MovieIcon color="action">movie</MovieIcon>
        Todas las peliculas
      </Button>
    </nav>
  );
};

export default Menu;
