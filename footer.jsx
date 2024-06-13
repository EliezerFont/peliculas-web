import React from "react";
import "./footer.css";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

const footer = () => {
  return (
    <footer>
      <p>Venta de peliculas en HD</p>
      <EmailIcon color="primary" fontSize="large">
        email
      </EmailIcon>
      &nbsp;&nbsp;
      <FacebookIcon color="primary" fontSize="large">
        facebook
      </FacebookIcon>
    </footer>
  );
};

export default footer;
