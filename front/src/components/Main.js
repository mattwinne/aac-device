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

  const meals = [{"text":"meal","image":"meal.svg"},{"text":"pizza","image":"pizza.svg"},{"text":"sandwich","image":"sandwich.svg"},
  {"text":"pasta","image":"pasta.svg"}, {"text":"steak","image":"steak.svg"},{"text":"nuggets","image":"chicken_nuggets.svg"},
  {"text":"salad","image":"salad.svg"}, {"text":"turkey","image":"turkey.svg"},{"text":"fish","image":"fish_battered.svg"}, {"text":"ham","image":"ham.svg"},
  {"text":"rice","image":"rice.svg"},{"text":"soup","image":"soup.svg"}, {"text":"tuna","image":"tuna.svg"}, {"text":"cheese burger","image":"cheese_burger.svg"}]

  const breakfast = [{"text":"breakfast","image":"breakfast.svg"},{"text":"toast","image":"toast.svg"}, {"text":"butter","image":"butter.svg"},
  {"text":"jam","image":"jam.svg"}, {"text":"pancakes","image":"pancakes.svg"}, {"text":"bacon","image":"bacon.svg"}, {"text":"cereal","image":"cereal.svg"},
  {"text":"sausage","image":"sausages.svg"}, {"text":"eggs","image":"eggs_fried.svg"}, {"text":"yogurt","image":"yogurt.svg"}, {"text":"peanut butter","image":"peanut_butter.svg"},
  {"text":"bagel","image":"bagel.svg"}]

  const dessert = [{"text":"dessert","image":"dessert.svg"},{"text":"ice cream","image":"ice_cream.svg"},{"text":"cake","image":"cake.svg"}, {"text":"pie","image":"pie.svg"},
  {"text":"lollipop","image":"lollipop.svg"}, {"text":"candy","image":"candy.svg"}, {"text":"chocolate","image":"chocolate.svg"}]

  const vegetables = [{"text":"vegetables","image":"vegetables.svg"}, {"text":"broccoli","image":"broccoli.svg"}, {"text":"carrot","image":"carrot.svg"},
  {"text":"corn","image":"corn.svg"}, {"text":"corn","image":"corn.svg"}, {"text":"cucumber","image":"cucumber.svg"}, {"text":"green beans","image":"green_beans.svg"},
  {"text":"potato","image":"potato.svg"}, {"text":"peas","image":"peas.svg"}, {"text":"salad","image":"salad.svg"}, {"text":"lettuce","image":"lettuce.svg"},
  {"text":"tomato","image":"tomato.svg"}, {"text":"spinach","image":"spinach.svg"}, {"text":"onion","image":"onion.svg"}, {"text":"pepper","image":"pepper.svg"},
  {"text":"mushroom","image":"mushroom.svg"}]

  const fruit = [{"text":"fruit","image":"fruit.svg"},{"text":"apple","image":"apple.svg"}, {"text":"banana","image":"banana.svg"},
  {"text":"cherry","image":"cherry.svg"}, {"text":"grapes","image":"grapes.svg"}, {"text":"orange","image":"orange.svg"}, {"text":"peach","image":"peach.svg"},
  {"text":"pear","image":"pear.svg"},{"text":"strawberry","image":"strawberry.svg"}, {"text":"melon","image":"melon.svg"}, {"text":"lemon","image":"lemon.svg"},
  {"text":"lime","image":"lime.svg"}, {"text":"kiwi","image":"kiwi.svg"}, {"text":"watermelon","image":"watermelon.svg"}]

  const describe = []

  const animals = [{"text":"bird","image":"bird.svg"},{"text":"cat","image":"cat.svg"},{"text":"dog","image":"dog.svg"},{"text":"fish","image":"fish.svg"},
  {"text":"dolphin","image":"dolphin.svg"},{"text":"bear","image":"bear.svg"},{"text":"gorilla","image":"gorilla.svg"},{"text":"cow","image":"cow.svg"},
  {"text":"fox","image":"fox.svg"},{"text":"deer","image":"deer.svg"},{"text":"guinea pig","image":"guinea_pig.svg"},{"text":"hamster","image":"hamster.svg"},
  {"text":"lion","image":"lion.svg"},{"text":"giraffe","image":"giraffe.svg"},{"text":"horse","image":"horse.svg"}]

  const art = [{"text":"color","image":"color.svg", "folder":color, "mute":true}, {"text":"art","image":"art.svg"},{"text":"art class","image":"art_class.svg"},
  {"text":"art room","image":"art_room.svg"}, {"text":"crafts","image":"craft_table.svg"}]

  const body = [{"text":"body","image":"body.svg"},{"text":"hair","image":"hair.png"},{"text":"ear","image":"ear.svg"},{"text":"throat","image":"throat.svg"},{"text":"head","image":"head.svg"},
  {"text":"eye","image":"eye.svg"},{"text":"nose","image":"nose.png"},{"text":"mouth","image":"mouth.svg"},{"text":"arm","image":"arm.svg"},
  {"text":"leg","image":"leg.svg"},{"text":"foot","image":"foot.svg"},{"text":"stomach","image":"stomach.svg"},{"text":"back","image":"back.svg"},
  {"text":"chest","image":"chest.svg"},{"text":"teeth","image":"teeth.svg"},{"text":"tongue","image":"tongue.svg"},{"text":"skin","image":"skin.svg"},
  {"text":"finger","image":"finger.svg"},{"text":"toe","image":"toe.svg"}]

  const clothes = [{"text":"clothes","image":"clothes.svg"},{"text":"shirt","image":"shirt.svg"},{"text":"pants","image":"pants.svg"}, {"text":"coat","image":"coat.svg"},
  {"text":"dress","image":"dress.svg"}, {"text":"shoes","image":"shoes.svg"}, {"text":"socks","image":"socks.svg"}, {"text":"underwear","image":"underwear.png"},
  {"text":"pajamas","image":"pajamas.png"}, {"text":"gloves","image":"gloves.svg"}, {"text":"purse","image":"purse.svg"}, {"text":"umbrella","image":"umbrella.svg"},
  {"text":"hat","image":"hat.svg"}, {"text":"belt","image":"belt.svg"}, {"text":"glasses","image":"glasses.svg"}, {"text":"sunglasses","image":"sunglasses.svg"},
  {"text":"skirt","image":"skirt.svg"},{"text":"sandals","image":"sandals.svg"},{"text":"swim trunks","image":"swim_trunks.svg"}, {"text":"bikini","image":"bikini.svg"}]

  const containers = [{"text":"container","image":"container.svg"},{"text":"bag","image":"bag.svg"}, {"text":"backpack","image":"backpack.svg"}, {"text":"purse","image":"purse.svg"},
  {"text":"lunch box","image":"lunch_box.svg"},{"text":"jar","image":"jar.svg"},{"text":"lcoker","image":"locker.svg"},{"text":"bucket","image":"bucket.svg"},
  {"text":"suitcase","image":"suitcase.svg"},{"text":"recycle bin","image":"recycle_bin.svg"}, {"text":"trash bin","image":"trash_bin.svg"},{"text":"vase","image":"vase.svg"}]

  const drinks = [{"text":"drink","image":"drink.svg"}, {"text":"juice","image":"juice.svg"}, {"text":"lemonade","image":"lemonade.svg"}, {"text":"milkshake","image":"milkshake.svg"},
  {"text":"water","image":"water.svg"}, {"text":"milk","image":"milk.svg"}, {"text":"tea","image":"tea.svg"}, {"text":"coffee","image":"coffee.svg"}]

  const furniture = [{"text":"furniture","image":"furniture.svg"},{"text":"lamp","image":"lamp.svg"}, {"text":"bookcase","image":"bookcase.svg"},
  {"text":"bed","image":"bed.svg"}, {"text":"dresser","image":"dresser.svg"}, {"text":"chair","image":"chair.svg"}, {"text":"drink","image":"drink.svg"},
  {"text":"table","image":"table.svg"}, {"text":"wheelchair","image":"wheelchair.svg"}, {"text":"door","image":"door.svg"}, {"text":"floor","image":"floor.svg"},
  {"text":"stairs","image":"stairs.svg"}]

  const food = [{"text":"meals","image":"meal.svg","folder": meals, "mute":true},{"text":"veggies","image":"vegetables.svg","folder": vegetables, "mute":true},
  {"text":"fruit","image":"fruit.svg","folder": fruit, "mute":true},{"text":"dessert","image":"dessert.svg","folder": dessert, "mute":true},
  {"text":"breakfast","image":"breakfast.svg","folder": breakfast, "mute":true},{"text":"lunch","image":"lunch.svg"},{"text":"dinner","image":"dinner.svg"},
  {"text":"drinks","image":"drink.svg","folder": drinks, "mute":true} ]

  const games = [{"text":"games","image":"to_play.svg"},{"text":"ball","image":"ball.svg"}, {"text":"video_games","image":"video_games.svg"}, {"text":"cars","image":"cars.svg"},
  {"text":"crayons","image":"crayon.svg"}, {"text":"legos","image":"lego.svg"}, {"text":"bingo","image":"bingo.svg"}, {"text":"cards","image":"playing_cards.svg"},
  {"text":"puzzle","image":"puzzle.svg"}]

  const health = [{"text":"medicine","image":"medicine.svg"},{"text":"cold","image":"sneeze_cold.svg"}, {"text":"toothache","image":"toothache.png"},
  {"text":"headache","image":"headache.png"}, {"text":"stomach ache","image":"stomach_ache.png"}, {"text":"fever","image":"fever.png"}, {"text":"soar throat","image":"soar_throat.png"},
  {"text":"sick","image":"sick.png"}]

  const holidays = []

  const hygiene = []

  const kitchen = [{"text":"to cook","image":"to_cook.svg"},{"text":"microwave","image":"microwave.svg"}, {"text":"mixer","image":"mixer.svg"},{"text":"toaster","image":"toaster.svg"},{"text":"dishwasher","image":"dishwasher.svg"},
{"text":"refridgerator","image":"refridgerator.svg"},{"text":"blender","image":"blender.svg"},]

  const music = []

  const nature = []

  const party = []

  const places = []

  const reading = []

  const school = []

  const sports = []

  const technology = []

  const tools = []

  const toys = []

  const vehicles = []

  const watch = []

  const weather = []

  const things = [{"text":"animals","image":"cat.svg","folder": animals, "mute":true}, {"text":"art","image":"art.svg","folder": art, "mute":true},
  {"text":"body","image":"body.svg","folder": body, "mute":true}, {"text":"clothes","image":"clothes.svg","folder": clothes, "mute":true},
  {"text":"containers","image":"container.svg","folder": containers, "mute":true}, {"text":"food","image":"food.svg","folder": food, "mute":true},
  {"text":"drinks","image":"drink.svg","folder": drinks, "mute":true},{"text":"furniture","image":"furniture.svg","folder": furniture, "mute":true},
  {"text":"games","image":"to_play.svg","folder": games, "mute":true}, {"text":"health","image":"medicine.svg","folder": health, "mute":true}]

  const people = [{"text":"people","image":"people.png"},{"text":"mom","image":"mom.svg"},{"text":"and","image":"and.svg"},{"text":"dad","image":"dad.png"},
  {"text":"him","image":"him.svg"},{"text":"her","image":"her.svg"}, {"text":"you","image":"you.png"},{"text":"your","image":"your.png"},{"text":"friend","image":"friend.png"},
  {"text":"teacher","image":"teacher.svg"}, {"text":"my","image":"my.png"}, {"text":"mine","image":"mine.svg"}, {"text":"they","image":"they.svg"}, {"text":"we","image":"we.png"}]

  const want = [{"text":"to eat","image":"eat_to.svg", "folder":food},{"text":"to drink","image":"drink_to.svg", "folder":drinks},{"text":"to watch","image":"to_watch.png","folder":watch},
  {"text":"people","image":"people.png", "folder":people, "mute":true},{"text":"to go","image":"to_go.png", "folder":places},{"text":"more","image":"more.png", "return":true},
  {"text":"to go","image":"to_go.png"},{"text":"to play","image":"to_play.png"},{"text":"to listen","image":"to_listen.svg"},{"text":"to read","image":"to_read.png", "folder":reading},
  {"text":"to","image":"to.svg"}, {"text":"it","image":"it.svg"}, {"text":"the","image":"the.svg"}, {"text":"that","image":"that.svg"},{"text":"things","image":"things.png", "folder":things, "mute":true}]

  const basic_front_page = [{"text":"hello","image":"hello.svg"},{"text":"yes","image":"correct.svg"}, {"text":"no","image":"mistake_no_wrong.svg"},
  {"text":"I am","image":"i_am.png"}, {"text":"I want","image":"i_want.svg", "folder":want}, {"text":"I need","image":"need.png"},{"text":"I"}, 
  {"text":"I like","image":"i_like.svg"}, {"text":"questions","image":"why.svg", "folder":questions, "mute":true}, {"text":"directions","image":"across.svg", "folder":directions, "mute":true}, 
  {"text":"feelings","image":"excited_man.svg", "folder":feelings}, {"text":"people","image":"people.png", "folder":people, "mute":true},{"text":"things","image":"things.png", "folder":things, "mute":true}]

  const front_page = basic_front_page.concat()

  const [cards, setCards] = useState(front_page)
  const [prevCards, setPrevCards] = useState(cards)

  const select = (item) => {
      if (item.mute) {
      }
      else {
        setText(text + " " + item.text)
        speak(item.text)
      }

      if (item.folder) {
        setPrevCards(cards)
        setCards(item.folder)
      } 

      if (item.return) {
        setPrevCards(cards)
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
        <Button onClick={()=>setCards(prevCards)}>Back</Button>
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
