import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

type Props = {
  setCards: React.Dispatch<React.SetStateAction<Item[]>>;
  frontPage: Item[];
};

function HomeButton({ setCards, frontPage }: Props) {
  return (
    <IconButton onClick={() => setCards(frontPage)}>
      <HomeIcon
        fontSize="large"
        sx={{
          height: "50px",
        }}
      />
    </IconButton>
  );
}

export default HomeButton;
