import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PropTypes from "prop-types";
import React from "react";

const BackArrow = ({ setCards, prevCards }) => {
  return (
    <IconButton onClick={() => setCards(prevCards)}>
      <ArrowBackIosIcon
        fontSize="large"
        color="theme.primary.light"
        sx={{
          height: "50px",
        }}
      />
    </IconButton>
  );
}
BackArrow.propTypes = {
  setCards: PropTypes.func.isRequired,
  prevCards: PropTypes.array.isRequired,
};

export default BackArrow;
