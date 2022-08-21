import { IconButton } from "@mui/material";
import { useLongPress } from "use-long-press";
import BackspaceIcon from "@mui/icons-material/Backspace";
import PropTypes from "prop-types";
import React from "react";

const DeleteButton = ({ text, setText }) => {
  const resetText = useLongPress(() => {
    setText("");
  });

  const removeLastWord = (str) => {
    const lastIndexOfSpace = str.lastIndexOf(" ");

    if (lastIndexOfSpace === -1) {
      return;
    }

    setText(str.substring(0, lastIndexOfSpace));
  };
  return (
    <IconButton {...resetText()} onClick={() => removeLastWord(text)}>
      <BackspaceIcon
        fontSize="large"
        color="theme.primary.light"
        sx={{
          height: "50px",
        }}
      />
    </IconButton>
  );
}

DeleteButton.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};

export default DeleteButton;
