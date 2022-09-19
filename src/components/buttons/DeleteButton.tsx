import { IconButton } from "@mui/material";
import { useLongPress } from "use-long-press";
import BackspaceIcon from "@mui/icons-material/Backspace";
import React from "react";

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

function DeleteButton({ text, setText }: Props) {
  const resetText = useLongPress(() => {
    setText("");
  });

  const removeLastWord = (str: string) => {
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
        sx={{
          height: "50px",
        }}
      />
    </IconButton>
  );
}

export default DeleteButton;
