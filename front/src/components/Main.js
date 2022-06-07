import {Box, Button, Container, Card, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Stack, Typography, TextField} from "@mui/material"
import React, { useState } from "react";

function Main() {
  const synth = window.speechSynthesis;



  const [text, setText] = useState("")
  const words = ["I", "you", "he", "she", "it", "that", "want", "like", "feel","see", "look", "can", "do"]


  const questions = [{"type":"sound", "text":"how","image":"mulberry/how.svg"},{"type":"sound", "text":"what","image":"mulberry/what.svg"},{"type":"sound", "text":"where","image":"mulberry/where.svg"},{"type":"sound", "text":"which","image":"mulberry/which.svg"},
                    {"type":"sound", "text":"why","image":"mulberry/why.svg"},{"type":"sound", "text":"who","image":"mulberry/who.svg"},{"type":"sound", "text":"which","image":"mulberry/which.svg"}]

  const color = [{"type":"sound", "text":"black","image":"mulberry/black.svg"},{"type":"sound", "text":"blue","image":"mulberry/blue.svg"},{"type":"sound", "text":"green","image":"mulberry/green.svg"},
                {"type":"sound", "text":"brown","image":"mulberry/brown.svg"},{"type":"sound", "text":"pink","image":"mulberry/pink.svg"},{"type":"sound", "text":"purple","image":"mulberry/purple.svg"},
                {"type":"sound", "text":"red","image":"mulberry/red.svg"},{"type":"sound", "text":"yellow","image":"mulberry/yellow.svg"}]
                
  const front_page = [{"type":"sound", "text":"hello","image":"mulberry/hello.svg"},{"type":"sound", "text":"yes","image":"mulberry/correct.svg"}, {"type":"sound", "text":"no","image":"mulberry/mistake_no_wrong.svg"},
                      {"type":"folder", "text":"questions","image":"mulberry/why.svg", "folder":questions}]
  const [cards, setCards] = useState(front_page)
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
  const display = (item) => {
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
  const folder_display = (item) => {
    return (
      <Grid item>
          <Card>
            <CardActionArea onClick={() => setCards(item.folder)}>
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
        <Button onClick={()=>setCards(front_page)}>Home</Button>
        </Grid>
        </Grid>

      <Container>

        <Grid container>
      {cards.map((item) => item.folder ? folder_display(item) : display(item))}
        </Grid>
      </Container>
    </div>
  );
}

export default Main;
