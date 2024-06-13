import React, { useState, useEffect } from "react";
import Pelicula from "./pelicula";
import { obtenerPeliculas } from "../Services/peliculasServices";
import Grid from "@mui/material/Unstable_Grid2";

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    cargarPeliculas();
  }, []);

  const cargarPeliculas = async () => {
    const { data: peliculas } = await obtenerPeliculas();
    setPeliculas(peliculas);
  };

  return (
    <>
      <div>
        <h2>Peliculas</h2>
      </div>
      <Grid container spacing={2}>
        {peliculas.map((pelicula) => (
          <Pelicula datos={pelicula} key={pelicula.IdPelicula}></Pelicula>
        ))}
      </Grid>
    </>
  );
};

export default Peliculas;
