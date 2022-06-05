import {Button, Container, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, TextField} from "@mui/material"
import React, { useState } from "react";

function Main() {
  const synth = window.speechSynthesis;



  const [text, setText] = useState("")
  const words = ["dog", "cat", "truck", "car"]

  const select = (item) => {
    setText(text + " " + item)
    speak(item)
  }

  const speak = (item) => {
    console.log(item)
    if(synth.speaking) {
      console.error("Already speaking...")
      return;
    }
    if(item !== "") {
      console.log("gunna speak")
      const speakText = new SpeechSynthesisUtterance(item)
      speakText.onend = e => {
        console.log("Done speaking...")

    }
    synth.speak(speakText)
    }
  }
  const cards = (item) => {
    return (
      <Grid item>
          <Card>
            <CardActionArea onClick={() => select(item)}>
              <CardContent>

                <Typography
                  color="txt"
                  fontSize="18px"
                  style={{ marginBlock: "auto" }}
                >
                  {item}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </Grid>
    )
    
  }
  
  
  return (
    <div className="App">
      <Grid container>
        <Grid item>
        <TextField value={text} onChange={(e)=>setText(e.target.value)}/>
        </Grid>
        <Grid item>
        <Button onClick={()=>speak(text)}>Play</Button>
        <Button onClick={()=>setText("")}>Reset</Button>
        </Grid>
        </Grid>

      <Container>

        <Grid container>
      {words.map((item) => cards(item))}
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
