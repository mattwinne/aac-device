import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useLongPress } from "use-long-press";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BackspaceIcon from "@mui/icons-material/Backspace";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import React, { useEffect, useState } from "react";
import { frontPage } from "./ImageData";

function Main() {
  const synth = window.speechSynthesis;

  const [text, setText] = useState("");
  const [cards, setCards] = useState(frontPage);
  const [prevCards, setPrevCards] = useState(cards);
  const [isLoading, setIsLoading] = useState(true);
  const resetText = useLongPress(() => {
    setText("");
  });

  const cacheImages = async (srcArray, firstIteration) => {
    const promises = await srcArray.map((src) => {
      if (firstIteration && src.folder) {
        cacheImages(src.folder, false);
      }
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `https://res.cloudinary.com/dscty5rng/image/upload/v1658520965/aac/${src.image}`;
        // If using local assets
        // img.src = require(`../assets/symbols/${src.image}`);
        img.onload = resolve();
        img.onerror = reject();
      });
    });

    await Promise.all(promises);

    setIsLoading(false);
  };
  useEffect(() => {
    cacheImages(cards, true);
  }, [cards]);

  const speak = (item) => {
    if (synth.speaking) {
      // return; prevents button mashing
    }
    if (item !== "") {
      const speakText = new SpeechSynthesisUtterance(item);
      speakText.onend = () => {};
      synth.speak(speakText);
    }
  };

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

  const removeLastWord = (str) => {
    const lastIndexOfSpace = str.lastIndexOf(" ");

    if (lastIndexOfSpace === -1) {
      return;
    }

    setText(str.substring(0, lastIndexOfSpace));
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
          <IconButton onClick={() => setCards(prevCards)}>
            <ArrowBackIosIcon
              fontSize="large"
              color="theme.primary.light"
              sx={{ height: "50px" }}
            />
          </IconButton>
          <IconButton onClick={() => setCards(frontPage)}>
            <HomeIcon
              fontSize="large"
              color="theme.primary.light"
              sx={{ height: "50px" }}
            />
          </IconButton>
        </Grid>
        <Grid item md sm xs>
          <FormControl fullWidth>
            <TextField
              label=""
              multiline
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item alignItems="flex-end" justify="flex-start">
          <IconButton {...resetText()} onClick={() => removeLastWord(text)}>
            <BackspaceIcon
              fontSize="large"
              color="theme.primary.light"
              sx={{ height: "50px" }}
            />
          </IconButton>
          <IconButton onClick={() => speak(text)}>
            <PlayCircleIcon
              fontSize="large"
              color="theme.primary.light"
              sx={{ height: "50px" }}
            />
          </IconButton>
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
