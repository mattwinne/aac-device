import {Box, Button, Container, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, TextField} from "@mui/material"
import React, { useState } from "react";

function Main() {
  const synth = window.speechSynthesis;



  const [text, setText] = useState("")

  const questions = [{"text":"how","image":"how.svg"},{"text":"what","image":"what.svg"},{"text":"where","image":"where.svg"},{"text":"which","image":"which.svg"},
  {"text":"why","image":"why.svg"},{"text":"who","image":"who.svg"}]

  const color = [{"text":"black","image":"black.svg"},{"text":"blue","image":"blue.svg"},{"text":"green","image":"green.svg"},
  {"text":"brown","image":"brown.svg"},{"text":"pink","image":"pink.svg"},{"text":"purple","image":"purple.svg"},
  {"text":"red","image":"red.svg"},{"text":"yellow","image":"yellow.svg"}]
  
  const directions = [{"text":"up","image":"up.svg"},{"text":"down","image":"down.svg"},{"text":"left","image":"left.svg"},
  {"text":"right","image":"right.svg"},{"text":"forwards","image":"forwards.svg"},{"text":"backwards","image":"backwards.svg"},
  {"text":"enter","image":"enter.svg"},{"text":"exit","image":"exit.svg"},]

  const feelings = [{"text":"happy","image":"happy_man.svg"},{"text":"sad","image":"sad_man.svg"},{"text":"excited","image":"excited_man.svg"},
  {"text":"fine","image":"face_neutral_3.svg"},{"text":"surprised","image":"surprised_man.svg"},{"text":"worried","image":"worried_man.svg"}]

  const food = []

  const drink = []

  const watch = []

  const reading = []

  const places = []

  const describe = []

  const things = []

  const people = [{"text":"people","image":"people.png"},{"text":"mom","image":"mom.svg"},{"text":"and","image":"and.svg"},{"text":"dad","image":"dad.png"},
  {"text":"him","image":"him.svg"},{"text":"her","image":"her.svg"}, {"text":"you","image":"you.png"},{"text":"your","image":"your.png"},{"text":"friend","image":"friend.png"},
  {"text":"teacher","image":"teacher.svg"}, {"text":"my","image":"my.png"}, {"text":"mine","image":"mine.svg"}, {"text":"they","image":"they.svg"}, {"text":"we","image":"we.png"}]

  const want = [{"text":"to eat","image":"eat_to.svg", "folder":food},{"text":"to drink","image":"drink_to.svg", "folder":drink},{"text":"to watch","image":"to_watch.png","folder":watch},
  {"text":"people","image":"people.png", "folder":people, "mute":true},{"text":"to go","image":"to_go.png", "folder":places},{"text":"more","image":"more.png", "return":true},
  {"text":"to go","image":"to_go.png"},{"text":"to play","image":"to_play.png"},{"text":"to listen","image":"to_listen.svg"},{"text":"to read","image":"to_read.png", "folder":reading},
  {"text":"to","image":"to.svg"}, {"text":"it","image":"it.svg"}, {"text":"the","image":"the.svg"}, {"text":"that","image":"that.svg"},{"text":"things","image":"things.png", "folder":things}]

  const basic_front_page = [{"text":"hello","image":"hello.svg"},{"text":"yes","image":"correct.svg"}, {"text":"no","image":"mistake_no_wrong.svg"},
  {"text":"I am","image":"i_am.png"}, {"text":"I want","image":"i_want.svg", "folder":want}, {"text":"I need","image":"need.png"},{"text":"I"}, 
  {"text":"I like","image":"i_like.svg"}, {"text":"questions","image":"why.svg", "folder":questions, "mute":true}, {"text":"directions","image":"across.svg", "folder":directions, "mute":true}, 
  {"text":"feelings","image":"excited_man.svg", "folder":feelings}, {"text":"people","image":"people.png", "folder":people, "mute":true},]





  const front_page = basic_front_page.concat()




  const [cards, setCards] = useState(front_page)
  const select = (item) => {
      if (item.mute) {
      }
      else {
        setText(text + " " + item.text)
        speak(item.text)
      }

      if (item.folder) {
        setCards(item.folder)
      } 

      if (item.return) {
        setCards(front_page)
      } 

  }

  const speak = (item) => {
    if(synth.speaking) {
      // return;
    }
    if(item !== "") {
      const speakText = new SpeechSynthesisUtterance(item)
      speakText.onend = e => {

    }
    synth.speak(speakText)
    }
  }
  const display = (item) => {

    const color = item.folder ? "secondary.light" : "primary.light"
    return (
      <Grid item xs={2}>
        <Card sx={{backgroundColor: color}}>
            <CardActionArea onClick={() => select(item)}>
            {item.image ? display_image(item):display_text(item.text)}
            </CardActionArea>
            </Card>
      </Grid>
    )
  }

  const display_image = (item) => {
    return(
      <>
      <CardMedia  image={process.env.PUBLIC_URL + `./symbols/${item.image}`}/>
        <CardContent>
          <Typography>
            {item.text}
          </Typography> 
        </CardContent>
      </>
    )
  }
  const display_text = (text) => {
    return(
      <>
        <CardContent>
          <Typography variant="h4">
            {text}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography>
            {text}
          </Typography> 
        </CardContent>
      </>
    )
  }
  
  
  return (
    
    <Container>
      
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

     

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {cards.map((item) => display(item))}
        </Grid>

    </Container>
  );
}

export default Main;
