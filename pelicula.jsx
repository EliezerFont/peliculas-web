import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Pelicula = ({ datos }) => {
  const [botones, setBotones] = useState("");
  const favorito = useRef();

  const setFavorito = () => {
    favorito.current.style.backgroundColor = "green";
  };
  return (
    <>
      <Grid container item xs={12} sm={4} lg={3}>
        <Paper style={{ padding: 5, textAlign: "center" }}>
          <h2>{datos.titulo}</h2>
          <FavoriteIcon color={"disabled"} style={{ cursos: "pointer" }}>
            favorite
          </FavoriteIcon>
          <div>
            <img width={200} src={datos.Portada} />
          </div>
          <div>
            <Rating value={datos.estrellas} readOnly></Rating>
          </div>
          <div>{datos.Sinopsis}</div>
          <br />
          <div>{`Genero: ${datos.Genero}`}</div>
          <br />
          <div>{`Director: ${datos.Director}`}</div>
          <br />
          <div>{`Año: ${datos.Año}`}</div>
          <br />
          <div>
            <b>{`Precio: $ ${datos.Precio}`}</b>
          </div>
          <br />
          <div>
            <Button
              variant="contained"
              color="primary"
              disabled={botones}
              onClick={() => {
                setBotones("disabled");
                alert("Ha sido comprada");
              }}
            >
              Comprar
            </Button>
            &nsp;
            <Button
              variant="outlined"
              color="secondary"
              disabled={botones}
              onClick={() => {
                setBotones("disabled");
                alert("Ha sido agregada al carrito");
              }}
            >
              Agregar al carrito
            </Button>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default Pelicula;
