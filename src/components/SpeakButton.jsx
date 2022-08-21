import { IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PropTypes from "prop-types";
import React from "react";
import speak from "./Speak";

const SpeakButton = ({ text }) => {
  return (
    <IconButton onClick={() => speak(text)}>
      <PlayCircleIcon
        fontSize="large"
        color="theme.primary.light"
        sx={{
          height: "50px",
        }}
      />
    </IconButton>
  );
}
SpeakButton.propTypes = {
  text: PropTypes.string.isRequired,
};
export default SpeakButton;
