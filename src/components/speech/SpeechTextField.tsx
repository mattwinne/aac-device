import { FormControl, TextField } from "@mui/material";
import React from "react";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function SpeechTextField({ text, setText }: Props) {
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

export default SpeechTextField;
