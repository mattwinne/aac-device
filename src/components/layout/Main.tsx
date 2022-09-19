import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BackArrow from "../buttons/BackArrow";
import DeleteButton from "../buttons/DeleteButton";
import HomeButton from "../buttons/HomeButton";
import SpeakButton from "../buttons/SpeakButton";
import SpeechTextField from "../speech/SpeechTextField";
import cacheImages from "../images/cacheImages";
import frontPage from "../images/ImageData";
import speak from "../speech/Speak";

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

  const select = (item: Item) => {
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

  const displayImage = (item: Item) => {
    return (
      <>
        <CardMedia
          component="img"
          image={`https://res.cloudinary.com/dscty5rng/image/upload/v1658520965/aac/${item.image}`}
        />
        <Typography sx={{ position: "relative" }} align="center" variant="h4">
          {item.text}
        </Typography>
      </>
    );
  };

  const displayText = (txt: string) => {
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

  const display = (item: Item) => {
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
        justifyContent="center"
        alignItems="center"
        marginBottom="10px"
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 8, sm: 8, md: 12 }}
        sx={{ backgroundColor: "tertiary.light" }}
      >
        <Grid item>
          <BackArrow setCards={setCards} prevCards={prevCards} />
          <HomeButton setCards={setCards} frontPage={frontPage} />
        </Grid>
        <Grid item md sm xs>
          <SpeechTextField text={text} setText={setText} />
        </Grid>
        <Grid item>
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
