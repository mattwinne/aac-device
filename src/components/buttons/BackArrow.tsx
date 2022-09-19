import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";

type Props = {
  setCards: React.Dispatch<React.SetStateAction<Item[]>>;
  prevCards: Item[];
};

function BackArrow({ setCards, prevCards }: Props) {
  return (
    <IconButton onClick={() => setCards(prevCards)}>
      <ArrowBackIosIcon
        fontSize="large"
        sx={{
          height: "50px",
        }}
      />
    </IconButton>
  );
}

export default BackArrow;
