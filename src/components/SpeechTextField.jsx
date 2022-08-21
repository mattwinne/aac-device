import { FormControl, TextField } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

function SpeechTextField({ text, setText }) {
  return (
    <FormControl fullWidth>
      <TextField
        label=""
        multiline
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </FormControl>
  );
}
SpeechTextField.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};

export default SpeechTextField;
