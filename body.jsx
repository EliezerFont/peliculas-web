import React from "react";
import Peliculas from "../Pelicula/peliculas";
import { Route } from "react-router-dom";
import Favoritos from "../Favoritos/favoritos";
import Carrito from "../Carrito/carrito";
import destacadas from "../Pelicula/destacadas";
import buscar from "../Pelicula/buscar";

const Body = () => {
  return (
    <section>
      <Route path="/" exact component={Peliculas}></Route>
      <Route path="/peliculas" exact component={Peliculas}></Route>
      <Route path="/favoritos" exact component={Favoritos}></Route>
      <Route path="/carrito" exact component={Carrito}></Route>
      <Route path="/destacadas" exact component={destacadas}></Route>
      <Route path="/buscar" exact component={buscar}></Route>
    </section>
  );
};

export default Body;
