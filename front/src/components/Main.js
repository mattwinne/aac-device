import {Box, Button, Container, Card, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Stack, Typography, TextField} from "@mui/material"
import React, { useState } from "react";

function Main() {
  const synth = window.speechSynthesis;



  const [text, setText] = useState("")
  const words = ["I", "you", "he", "she", "it", "that", "want", "like", "feel","see", "look", "can", "do"]

  const questions = [{"text":"how","image":"mulberry/how.svg"},{"text":"what","image":"mulberry/what.svg"},{"text":"where","image":"mulberry/where.svg"},{"text":"which","image":"mulberry/which.svg"},
                    {"text":"why","image":"mulberry/why.svg"},{"text":"who","image":"mulberry/who.svg"},{"text":"which","image":"mulberry/which.svg"}]

  const select = (item) => {
    setText(text + " " + item)
    speak(item)
  }

  const speak = (item) => {
    if(synth.speaking) {
      return;
    }
    if(item !== "") {
      const speakText = new SpeechSynthesisUtterance(item)
      speakText.onend = e => {

    }
    synth.speak(speakText)
    }
  }
  const cards = (item) => {
    return (
      <Grid item>
          <Card>
            <CardActionArea onClick={() => select(item.text)}>
              <Box position="relative">
            <CardMedia  image={process.env.PUBLIC_URL + `./symbols/${item.image}`}/>
            </Box>
              <CardContent>
                <Box position="relative">
                <Typography
                  color="txt"
                  fontSize="18px"
                  style={{ marginBlock: "auto" }}
                >
                  {item.text}
                </Typography> 
                </Box>
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
      {questions.map((item) => cards(item))}
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
