import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PropTypes from "prop-types";
import React from "react";

function HomeButton({ setCards, frontPage }) {
  return (
    <IconButton onClick={() => setCards(frontPage)}>
      <HomeIcon
        fontSize="large"
        color="theme.primary.light"
        sx={{
          height: "50px",
        }}
      />
    </IconButton>
  );
}
HomeButton.propTypes = {
  setCards: PropTypes.func.isRequired,
  frontPage: PropTypes.array.isRequired,
};
export default HomeButton;
