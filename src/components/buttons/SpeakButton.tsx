import { IconButton } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import React from "react";
import speak from "../speech/Speak";

type Props = {
  text: string;
};

function SpeakButton({ text }: Props) {
  return (
    <IconButton onClick={() => speak(text)}>
      <PlayCircleIcon
        fontSize="large"
        sx={{
          height: "50px",
        }}
      />
    </IconButton>
  );
}

export default SpeakButton;
