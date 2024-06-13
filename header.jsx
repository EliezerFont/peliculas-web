import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/icons-material/Badge";

const header = () => {
  return (
    <header>
      <h1>Peliculas HD</h1>
      <br />
      <Link to="/favoritos">
        <FavoriteIcon color="action" fontSize="large">
          favorite
        </FavoriteIcon>
      </Link>
      <Badge badgeContent={1} color="secondary"></Badge>
      &nsp;&nsp;&nsp;&nsp;
      <Link to="/carrito">Carrito</Link>
      <ShoppingCartIcon color="action" fontSize="large">
        shopping_cart
      </ShoppingCartIcon>
      <Badge badgeContent={3} color="primary"></Badge>
    </header>
  );
};

export default header;
