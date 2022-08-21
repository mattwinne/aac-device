import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import BackArrow from "./BackArrow";
import DeleteButton from "./DeleteButton";
import HomeButton from "./HomeButton";
import React, { useEffect, useState } from "react";
import SpeakButton from "./SpeakButton";
import SpeechTextField from "./SpeechTextField";
import cacheImages from "../cacheImages";
import frontPage from "./ImageData";
import speak from "./Speak";

function Main() {
  const [text, setText] = useState("");
  const [cards, setCards] = useState(frontPage);
  const [prevCards, setPrevCards] = useState(cards);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    cacheImages(cards, true);
    setIsLoading(false);
  }, [cards]);

  const select = (item) => {
    if (!item.mute) {
      setText(`${text} ${item.text}`);
      speak(item.text);
    }

    if (item.folder) {
      setPrevCards(cards);
      setCards(item.folder);
    }

    if (item.return) {
      setPrevCards(cards);
      setCards(frontPage);
    }
  };

  const displayImage = (item) => {
    return (
      <>
        <CardMedia
          image={`https://res.cloudinary.com/dscty5rng/image/upload/v1658520965/aac/${item.image}`}
        />
        <Typography sx={{ position: "relative" }} align="center" variant="h4">
          {item.text}
        </Typography>
      </>
    );
  };

  const displayText = (txt) => {
    return (
      <>
        <CardContent>
          <Typography variant="h4">{txt}</Typography>
        </CardContent>
        <CardContent>
          <Typography>{txt}</Typography>
        </CardContent>
      </>
    );
  };

  const display = (item) => {
    const cardColor = item.folder ? "secondary.light" : "primary.light";
    return (
      <Grid item xs={2} key={item.text}>
        <Card sx={{ backgroundColor: cardColor }}>
          <CardActionArea onClick={() => select(item)}>
            {item.image ? displayImage(item) : displayText(item.text)}
          </CardActionArea>
        </Card>
      </Grid>
    );
  };

  return (
    <>
      <Grid
        container
        position="relative"
        backgroundColor="tertiary.light"
        justifyContent="center"
        alignItems="center"
        marginBottom="10px"
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 8, sm: 8, md: 12 }}
      >
        <Grid item alignItems="flex-start" justify="flex-start">
          <BackArrow setCards={setCards} prevCards={prevCards} />
          <HomeButton setCards={setCards} frontPage={frontPage} />
        </Grid>
        <Grid item md sm xs>
          <SpeechTextField text={text} setText={setText} />
        </Grid>
        <Grid item alignItems="flex-end" justify="flex-start">
          <DeleteButton text={text} setText={setText} />
          <SpeakButton text={text} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 6, sm: 8, md: 12 }}
        sx={{ backgroundColor: "bg.main", position: "absolute" }}
      >
        {isLoading ? <CircularProgress /> : cards.map((item) => display(item))}
      </Grid>
    </>
  );
}

export default Main;
