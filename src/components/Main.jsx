import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
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
import React, { useState } from "react";
import and from "../assets/symbols/and.svg";
import angry from "../assets/symbols/angry.svg";
import apple from "../assets/symbols/apple.svg";
import arm from "../assets/symbols/arm.svg";
import art from "../assets/symbols/art.svg";
import artClass from "../assets/symbols/art_class.svg";
import artRoom from "../assets/symbols/art_room.svg";
import back from "../assets/symbols/back_1.svg";
import backpack from "../assets/symbols/backpack.svg";
import backwards from "../assets/symbols/backwards.svg";
import bacon from "../assets/symbols/bacon.svg";
import bad from "../assets/symbols/bad.svg";
import bag from "../assets/symbols/bag.svg";
import bagel from "../assets/symbols/bagel.svg";
import ball from "../assets/symbols/ball.svg";
import banana from "../assets/symbols/banana.svg";
import bank from "../assets/symbols/bank.svg";
import baseballGame from "../assets/symbols/baseball_game.svg";
import basketballGame from "../assets/symbols/basketball_game.svg";
import beach from "../assets/symbols/beach.svg";
import bear from "../assets/symbols/bear.svg";
import bed from "../assets/symbols/bed.svg";
import belt from "../assets/symbols/belt.svg";
import bikini from "../assets/symbols/bikini.svg";
import bingo from "../assets/symbols/bingo.svg";
import bird from "../assets/symbols/bird.svg";
import black from "../assets/symbols/black.svg";
import blender from "../assets/symbols/blender.svg";
import blue from "../assets/symbols/blue.svg";
import body from "../assets/symbols/body.svg";
import bookcase from "../assets/symbols/bookcase.svg";
import bowling from "../assets/symbols/bowling.svg";
import breakfast from "../assets/symbols/breakfast.svg";
import broccoli from "../assets/symbols/broccoli.svg";
import brown from "../assets/symbols/brown.svg";
import bucket from "../assets/symbols/bucket.svg";
import bus from "../assets/symbols/bus.svg";
import butter from "../assets/symbols/butter.svg";
import cake from "../assets/symbols/cake.svg";
import camp from "../assets/symbols/to_camp.svg";
import candy from "../assets/symbols/candy.svg";
import carrot from "../assets/symbols/carrot.svg";
import cat from "../assets/symbols/cat.svg";
import cereal from "../assets/symbols/cereal.svg";
import chair from "../assets/symbols/chair.svg";
import changeChannel from "../assets/symbols/change_channel.svg";
import cheeseBurger from "../assets/symbols/cheese_burger.svg";
import cherry from "../assets/symbols/cherry.svg";
import chest from "../assets/symbols/chest.svg";
import chickenNuggets from "../assets/symbols/chicken_nuggets.svg";
import chocolate from "../assets/symbols/chocolate.svg";
import church from "../assets/symbols/church.svg";
import classRoom from "../assets/symbols/class_room.svg";
import clothes from "../assets/symbols/clothes.svg";
import coat from "../assets/symbols/coat.svg";
import coffee from "../assets/symbols/coffee.svg";
import cold from "../assets/symbols/cold.png";
import color from "../assets/symbols/color.svg";
import comedy from "../assets/symbols/tv_comedy.svg";
import container from "../assets/symbols/container.svg";
import cook from "../assets/symbols/to_cook.svg";
import corn from "../assets/symbols/corn.svg";
import cow from "../assets/symbols/cow.svg";
import craftTable from "../assets/symbols/craft_table.svg";
import crayon from "../assets/symbols/crayon.svg";
import cucumber from "../assets/symbols/cucumber.svg";
import dad from "../assets/symbols/dad.png";
import deer from "../assets/symbols/deer.svg";
import describe from "../assets/symbols/rainbow.svg";
import dessert from "../assets/symbols/dessert.svg";
import different from "../assets/symbols/different.svg";
import dinner from "../assets/symbols/dinner.svg";
import directions from "../assets/symbols/across.svg";
import dishwasher from "../assets/symbols/dishwasher.svg";
import doSymbol from "../assets/symbols/do.png";
import doctor from "../assets/symbols/doctor.svg";
import dog from "../assets/symbols/dog.svg";
import dolphin from "../assets/symbols/dolphin.svg";
import dont from "../assets/symbols/dont.svg";
import door from "../assets/symbols/door.svg";
import down from "../assets/symbols/down.svg";
import drama from "../assets/symbols/tv_drama.svg";
import dress from "../assets/symbols/dress.svg";
import dresser from "../assets/symbols/dresser.svg";
import drink from "../assets/symbols/drink.svg";
import dry from "../assets/symbols/dry.svg";
import ear from "../assets/symbols/ear.svg";
import eggs from "../assets/symbols/eggs.svg";
import empty from "../assets/symbols/empty.png";
import enter from "../assets/symbols/enter.svg";
import excited from "../assets/symbols/excited_man.svg";
import exit from "../assets/symbols/exit.svg";
import eye from "../assets/symbols/eye.svg";
import fast from "../assets/symbols/fast.jpg";
import feelings from "../assets/symbols/feelings.svg";
import fever from "../assets/symbols/fever.png";
import finger from "../assets/symbols/finger.svg";
import first from "../assets/symbols/first.svg";
import fish from "../assets/symbols/fish.svg";
import fishBattered from "../assets/symbols/fish_battered.svg";
import floor from "../assets/symbols/floor.svg";
import food from "../assets/symbols/food.svg";
import foot from "../assets/symbols/foot.svg";
import forwards from "../assets/symbols/forwards.svg";
import fox from "../assets/symbols/fox.svg";
import friend from "../assets/symbols/friend.png";
import front from "../assets/symbols/front.svg";
import fruit from "../assets/symbols/fruit.svg";
import full from "../assets/symbols/full.png";
import funny from "../assets/symbols/funny.svg";
import furniture from "../assets/symbols/furniture.svg";
import giraffe from "../assets/symbols/giraffe.svg";
import glasses from "../assets/symbols/glasses.svg";
import gloves from "../assets/symbols/gloves.svg";
import go from "../assets/symbols/to_go.svg";
import golf from "../assets/symbols/golf.svg";
import good from "../assets/symbols/good.svg";
import gorilla from "../assets/symbols/gorilla.svg";
import grapes from "../assets/symbols/grapes.svg";
import great from "../assets/symbols/great.svg";
import green from "../assets/symbols/green.svg";
import greenBeans from "../assets/symbols/green_beans.svg";
import guineaPig from "../assets/symbols/guinea_pig.svg";
import hair from "../assets/symbols/hair.png";
import ham from "../assets/symbols/ham.svg";
import hamster from "../assets/symbols/hamster.svg";
import happy from "../assets/symbols/happy_man.svg";
import hat from "../assets/symbols/hat.svg";
import he from "../assets/symbols/him.svg";
import head from "../assets/symbols/head.svg";
import headAche from "../assets/symbols/headache.png";
import hello from "../assets/symbols/hello.svg";
import horse from "../assets/symbols/horse.svg";
import hot from "../assets/symbols/hot.svg";
import house from "../assets/symbols/house.svg";
import how from "../assets/symbols/how.svg";
import i from "../assets/symbols/I.png";
import iAm from "../assets/symbols/i_am.png";
import iLike from "../assets/symbols/i_like.svg";
import iNeed from "../assets/symbols/need.png";
import iWant from "../assets/symbols/i_want.svg";
import iceCream from "../assets/symbols/ice_cream.svg";
import it from "../assets/symbols/it.svg";
import jam from "../assets/symbols/jam.svg";
import jar from "../assets/symbols/jar.svg";
import juice from "../assets/symbols/juice.svg";
import kiwi from "../assets/symbols/kiwi.svg";
import lamp from "../assets/symbols/lamp.svg";
import last from "../assets/symbols/last.svg";
import left from "../assets/symbols/left.svg";
import leg from "../assets/symbols/leg.svg";
import lego from "../assets/symbols/lego.svg";
import lemon from "../assets/symbols/lemon.svg";
import lemonade from "../assets/symbols/lemonade.svg";
import lettuce from "../assets/symbols/lettuce.svg";
import lime from "../assets/symbols/lime.svg";
import lion from "../assets/symbols/lion.svg";
import locker from "../assets/symbols/locker.svg";
import lollipop from "../assets/symbols/lollipop.svg";
import loud from "../assets/symbols/loud.svg";
import lunch from "../assets/symbols/lunch.svg";
import lunchBox from "../assets/symbols/lunch_box.svg";
import meal from "../assets/symbols/meal.svg";
import mean from "../assets/symbols/mean.svg";
import medicine from "../assets/symbols/medicine.svg";
import melon from "../assets/symbols/melon.svg";
import microwave from "../assets/symbols/microwave.svg";
import milk from "../assets/symbols/milk.svg";
import milkshake from "../assets/symbols/milkshake.svg";
import mine from "../assets/symbols/mine.svg";
import mixer from "../assets/symbols/mixer.svg";
import mom from "../assets/symbols/mom.svg";
import more from "../assets/symbols/more.png";
import mouth from "../assets/symbols/mouth.svg";
import movie from "../assets/symbols/movie.png";
import mushroom from "../assets/symbols/mushroom.svg";
import my from "../assets/symbols/my.png";
import neutralFace from "../assets/symbols/face_neutral_3.svg";
import nice from "../assets/symbols/nice.png";
import no from "../assets/symbols/mistake_no_wrong.svg";
import nose from "../assets/symbols/nose.png";
import onion from "../assets/symbols/onion.svg";
import orange from "../assets/symbols/orange.svg";
import pajamas from "../assets/symbols/pajamas.png";
import pancakes from "../assets/symbols/pancakes.svg";
import pants from "../assets/symbols/pants.svg";
import pasta from "../assets/symbols/pasta.svg";
import peach from "../assets/symbols/peach.svg";
import peanutButter from "../assets/symbols/peanut_butter.svg";
import pear from "../assets/symbols/pear.svg";
import peas from "../assets/symbols/peas.svg";
import people from "../assets/symbols/people.png";
import pepper from "../assets/symbols/pepper.svg";
import picnic from "../assets/symbols/picnic.svg";
import pie from "../assets/symbols/pie.svg";
import pink from "../assets/symbols/pink.svg";
import pizza from "../assets/symbols/pizza.svg";
import playingCards from "../assets/symbols/playing_cards.svg";
import potato from "../assets/symbols/potato.svg";
import pretty from "../assets/symbols/pretty.svg";
import purple from "../assets/symbols/purple.svg";
import purse from "../assets/symbols/purse.svg";
import puzzle from "../assets/symbols/puzzle.svg";
import quiet from "../assets/symbols/quiet.svg";
import read from "../assets/symbols/to_read.png";
import recycleBin from "../assets/symbols/recycle_bin.svg";
import red from "../assets/symbols/red.svg";
import refridgerator from "../assets/symbols/refridgerator.svg";
import rice from "../assets/symbols/rice.svg";
import right from "../assets/symbols/right.svg";
import sad from "../assets/symbols/sad_man.svg";
import salad from "../assets/symbols/salad.svg";
import same from "../assets/symbols/same.svg";
import sandals from "../assets/symbols/sandals.svg";
import sandwich from "../assets/symbols/sandwich.svg";
import sausage from "../assets/symbols/sausages.svg";
import scared from "../assets/symbols/scared.png";
import school from "../assets/symbols/school.svg";
import she from "../assets/symbols/her.svg";
import shirt from "../assets/symbols/shirt.svg";
import shoes from "../assets/symbols/shoes.svg";
import shop from "../assets/symbols/shop.svg";
import sick from "../assets/symbols/sick.svg";
import skatePark from "../assets/symbols/skate_park.svg";
import skin from "../assets/symbols/skin.svg";
import skirt from "../assets/symbols/skirt.svg";
import slow from "../assets/symbols/slow.png";
import sneezeCold from "../assets/symbols/sneeze_cold.svg";
import soarThroat from "../assets/symbols/soar_throat.png";
import soccer from "../assets/symbols/soccer.svg";
import socks from "../assets/symbols/socks.svg";
import soup from "../assets/symbols/soup.svg";
import spinach from "../assets/symbols/spinach.svg";
import stairs from "../assets/symbols/stairs.svg";
import steak from "../assets/symbols/steak.svg";
import stomach from "../assets/symbols/stomach.svg";
import stomachAche from "../assets/symbols/stomach_ache.png";
import strawberry from "../assets/symbols/strawberry.svg";
import suitcase from "../assets/symbols/suitcase.svg";
import sunglasses from "../assets/symbols/sunglasses.svg";
import surprised from "../assets/symbols/surprised_man.svg";
import swim from "../assets/symbols/to_swim.svg";
import swimTrunks from "../assets/symbols/swim_trunks.svg";
import table from "../assets/symbols/table.svg";
import tea from "../assets/symbols/tea.svg";
import teacher from "../assets/symbols/teacher.svg";
import teeth from "../assets/symbols/teeth.svg";
import tennis from "../assets/symbols/tennis.svg";
import the from "../assets/symbols/the.svg";
import themePark from "../assets/symbols/theme_park.svg";
import they from "../assets/symbols/they.svg";
import things from "../assets/symbols/things.png";
import throat from "../assets/symbols/throat.svg";
import to from "../assets/symbols/to.svg";
import toDrink from "../assets/symbols/drink_to.svg";
import toEat from "../assets/symbols/eat_to.svg";
import toGet from "../assets/symbols/to_get.svg";
import toGo from "../assets/symbols/to_go.png";
import toGoOutside from "../assets/symbols/to_go_outside.svg";
import toHelp from "../assets/symbols/to_help.svg";
import toListen from "../assets/symbols/to_listen.svg";
import toPlay from "../assets/symbols/to_play.svg";
import toSleep from "../assets/symbols/to_sleep.svg";
import toWatch from "../assets/symbols/to_watch.png";
import toast from "../assets/symbols/toast.svg";
import toaster from "../assets/symbols/toaster.svg";
import toe from "../assets/symbols/toe.svg";
import toilet from "../assets/symbols/toilet.svg";
import tomato from "../assets/symbols/tomato.svg";
import tongue from "../assets/symbols/tongue.svg";
import toothAche from "../assets/symbols/toothache.png";
import toyCar from "../assets/symbols/toy_car.svg";
import trashBin from "../assets/symbols/trash_bin.svg";
import tuna from "../assets/symbols/tuna.svg";
import turkey from "../assets/symbols/turkey.svg";
import ugly from "../assets/symbols/ugly.svg";
import umbrella from "../assets/symbols/umbrella.svg";
import underwear from "../assets/symbols/underwear.png";
import up from "../assets/symbols/up.svg";
import vase from "../assets/symbols/vase.svg";
import vegetables from "../assets/symbols/vegetables.svg";
import videoGames from "../assets/symbols/video_games.svg";
import walk from "../assets/symbols/to_walk.svg";
import water from "../assets/symbols/water.svg";
import watermelon from "../assets/symbols/watermelon.svg";
import we from "../assets/symbols/we.png";
import wet from "../assets/symbols/wet.svg";
import what from "../assets/symbols/what.svg";
import wheelchair from "../assets/symbols/wheelchair.svg";
import where from "../assets/symbols/where.svg";
import which from "../assets/symbols/which.svg";
import who from "../assets/symbols/who.svg";
import why from "../assets/symbols/why.svg";
import work from "../assets/symbols/to_work.svg";
import worried from "../assets/symbols/worried_man.svg";
import yellow from "../assets/symbols/yellow.svg";
import yes from "../assets/symbols/correct.svg";
import yogurt from "../assets/symbols/yogurt.svg";
import you from "../assets/symbols/you.png";
import your from "../assets/symbols/your.png";

function Main() {
  const questionsFolder = [
    { text: "how", image: how },
    { text: "what", image: what },
    { text: "where", image: where },
    { text: "which", image: which },
    { text: "why", image: why },
    { text: "who", image: who },
  ];

  const colorsFolder = [
    { text: "black", image: black },
    { text: "blue", image: blue },
    { text: "green", image: green },
    { text: "brown", image: brown },
    { text: "pink", image: pink },
    { text: "purple", image: purple },
    { text: "red", image: red },
    { text: "yellow", image: yellow },
  ];

  const directionsFolder = [
    { text: "up", image: up },
    { text: "down", image: down },
    { text: "left", image: left },
    { text: "right", image: right },
    { text: "forwards", image: forwards },
    { text: "backwards", image: backwards },
    { text: "enter", image: enter },
    { text: "exit", image: exit },
  ];

  const feelingsFolder = [
    { text: "good", image: good },
    { text: "bad", image: bad },
    { text: "great", image: great },
    { text: "happy", image: happy },
    { text: "sad", image: sad },
    { text: "fine", image: neutralFace },
    { text: "surprised", image: surprised },
    { text: "worried", image: worried },
    { text: "excited", image: excited },
    { text: "sick", image: sick },
    { text: "tired", image: toSleep },
    { text: "mad", image: angry },
    { text: "scared", image: scared },
  ];

  const mealsFolder = [
    { text: "meal", image: meal },
    { text: "pizza", image: pizza },
    { text: "sandwich", image: sandwich },
    { text: "pasta", image: pasta },
    { text: "steak", image: steak },
    { text: "nuggets", image: chickenNuggets },
    { text: "salad", image: salad },
    { text: "turkey", image: turkey },
    { text: "fish", image: fishBattered },
    { text: "ham", image: ham },
    { text: "rice", image: rice },
    { text: "soup", image: soup },
    { text: "tuna", image: tuna },
    { text: "cheese burger", image: cheeseBurger },
  ];

  const breakfastFolder = [
    { text: "breakfast", image: breakfast },
    { text: "toast", image: toast },
    { text: "butter", image: butter },
    { text: "jam", image: jam },
    { text: "pancakes", image: pancakes },
    { text: "bacon", image: bacon },
    { text: "cereal", image: cereal },
    { text: "sausage", image: sausage },
    { text: "eggs", image: eggs },
    { text: "yogurt", image: yogurt },
    { text: "peanut butter", image: peanutButter },
    { text: "bagel", image: bagel },
  ];

  const dessertFolder = [
    { text: "dessert", image: dessert },
    { text: "ice cream", image: iceCream },
    { text: "cake", image: cake },
    { text: "pie", image: pie },
    { text: "lollipop", image: lollipop },
    { text: "candy", image: candy },
    { text: "chocolate", image: chocolate },
  ];

  const vegetablesFolder = [
    { text: "vegetables", image: vegetables },
    { text: "broccoli", image: broccoli },
    { text: "carrot", image: carrot },
    { text: "corn", image: corn },
    { text: "cucumber", image: cucumber },
    { text: "green beans", image: greenBeans },
    { text: "potato", image: potato },
    { text: "peas", image: peas },
    { text: "salad", image: salad },
    { text: "lettuce", image: lettuce },
    { text: "tomato", image: tomato },
    { text: "spinach", image: spinach },
    { text: "onion", image: onion },
    { text: "pepper", image: pepper },
    { text: "mushroom", image: mushroom },
  ];

  const fruitFolder = [
    { text: "fruit", image: fruit },
    { text: "apple", image: apple },
    { text: "banana", image: banana },
    { text: "cherry", image: cherry },
    { text: "grapes", image: grapes },
    { text: "orange", image: orange },
    { text: "peach", image: peach },
    { text: "pear", image: pear },
    { text: "strawberry", image: strawberry },
    { text: "melon", image: melon },
    { text: "lemon", image: lemon },
    { text: "lime", image: lime },
    { text: "kiwi", image: kiwi },
    { text: "watermelon", image: watermelon },
  ];

  const animalsFolder = [
    { text: "bird", image: bird },
    { text: "cat", image: cat },
    { text: "dog", image: dog },
    { text: "fish", image: fish },
    { text: "dolphin", image: dolphin },
    { text: "bear", image: bear },
    { text: "gorilla", image: gorilla },
    { text: "cow", image: cow },
    { text: "fox", image: fox },
    { text: "deer", image: deer },
    { text: "guinea pig", image: guineaPig },
    { text: "hamster", image: hamster },
    { text: "lion", image: lion },
    { text: "giraffe", image: giraffe },
    { text: "horse", image: horse },
  ];

  const artFolder = [
    { text: "color", image: color, folder: colorsFolder, mute: true },
    { text: "art", image: art },
    { text: "art class", image: artClass },
    { text: "art room", image: artRoom },
    { text: "crafts", image: craftTable },
  ];

  const bodyFolder = [
    { text: "body", image: body },
    { text: "hair", image: hair },
    { text: "ear", image: ear },
    { text: "throat", image: throat },
    { text: "head", image: head },
    { text: "eye", image: eye },
    { text: "nose", image: nose },
    { text: "mouth", image: mouth },
    { text: "arm", image: arm },
    { text: "leg", image: leg },
    { text: "foot", image: foot },
    { text: "stomach", image: stomach },
    { text: "back", image: back },
    { text: "chest", image: chest },
    { text: "teeth", image: teeth },
    { text: "tongue", image: tongue },
    { text: "skin", image: skin },
    { text: "finger", image: finger },
    { text: "toe", image: toe },
  ];

  const clothesFolder = [
    { text: "clothes", image: clothes },
    { text: "shirt", image: shirt },
    { text: "pants", image: pants },
    { text: "coat", image: coat },
    { text: "dress", image: dress },
    { text: "shoes", image: shoes },
    { text: "socks", image: socks },
    { text: "underwear", image: underwear },
    { text: "pajamas", image: pajamas },
    { text: "gloves", image: gloves },
    { text: "purse", image: purse },
    { text: "umbrella", image: umbrella },
    { text: "hat", image: hat },
    { text: "belt", image: belt },
    { text: "glasses", image: glasses },
    { text: "sunglasses", image: sunglasses },
    { text: "skirt", image: skirt },
    { text: "sandals", image: sandals },
    { text: "swim trunks", image: swimTrunks },
    { text: "bikini", image: bikini },
  ];

  const containersFolder = [
    { text: "container", image: container },
    { text: "bag", image: bag },
    { text: "backpack", image: backpack },
    { text: "purse", image: purse },
    { text: "lunch box", image: lunchBox },
    { text: "jar", image: jar },
    { text: "locker", image: locker },
    { text: "bucket", image: bucket },
    { text: "suitcase", image: suitcase },
    { text: "recycle bin", image: recycleBin },
    { text: "trash bin", image: trashBin },
    { text: "vase", image: vase },
  ];

  const drinksFolder = [
    { text: "drink", image: drink },
    { text: "juice", image: juice },
    { text: "lemonade", image: lemonade },
    { text: "milkshake", image: milkshake },
    { text: "water", image: water },
    { text: "milk", image: milk },
    { text: "tea", image: tea },
    { text: "coffee", image: coffee },
  ];

  const furnitureFolder = [
    { text: "furniture", image: furniture },
    { text: "lamp", image: lamp },
    { text: "bookcase", image: bookcase },
    { text: "bed", image: bed },
    { text: "dresser", image: dresser },
    { text: "chair", image: chair },
    { text: "table", image: table },
    { text: "wheelchair", image: wheelchair },
    { text: "door", image: door },
    { text: "floor", image: floor },
    { text: "stairs", image: stairs },
  ];

  const foodFolder = [
    { text: "meals", image: meal, folder: mealsFolder, mute: true },
    {
      text: "veggies",
      image: vegetables,
      folder: vegetablesFolder,
      mute: true,
    },
    { text: "fruit", image: fruit, folder: fruitFolder, mute: true },
    {
      text: "dessert",
      image: dessert,
      folder: dessertFolder,
      mute: true,
    },
    {
      text: "breakfast",
      image: breakfast,
      folder: breakfastFolder,
      mute: true,
    },
    { text: "lunch", image: lunch },
    { text: "dinner", image: dinner },
    { text: "drinks", image: drink, folder: drinksFolder, mute: true },
  ];

  const gamesFolder = [
    { text: "games", image: toPlay },
    { text: "ball", image: ball },
    { text: "video games", image: videoGames },
    { text: "cars", image: toyCar },
    { text: "crayons", image: crayon },
    { text: "legos", image: lego },
    { text: "bingo", image: bingo },
    { text: "cards", image: playingCards },
    { text: "puzzle", image: puzzle },
  ];

  const healthFolder = [
    { text: "medicine", image: medicine },
    { text: "cold", image: sneezeCold },
    { text: "toothache", image: toothAche },
    { text: "headache", image: headAche },
    { text: "stomach ache", image: stomachAche },
    { text: "fever", image: fever },
    { text: "soar throat", image: soarThroat },
    { text: "sick", image: sick },
  ];

  // const hygiene = [];

  const kitchenFolder = [
    { text: "to cook", image: cook },
    { text: "microwave", image: microwave },
    { text: "mixer", image: mixer },
    { text: "toaster", image: toaster },
    { text: "dishwasher", image: dishwasher },
    { text: "refridgerator", image: refridgerator },
    { text: "blender", image: blender },
  ];

  const placesFolder = [
    { text: "bathroom", image: toilet },
    { text: "bed", image: bed },
    { text: "home", image: house },
    { text: "doctor", image: doctor },
    { text: "for a walk", image: walk },
    { text: "outside", image: toGoOutside },
    { text: "theme park", image: themePark },
    { text: "skate park", image: skatePark },
    { text: "picnic", image: picnic },
    { text: "pool", image: swim },
    { text: "store", image: shop },
    { text: "work", image: work },
    { text: "school", image: school },
    { text: "bank", image: bank },
    { text: "church", image: church },
    { text: "camp", image: camp },
    { text: "bowling", image: bowling },
    { text: "beach", image: beach },
    { text: "bus", image: bus },
    { text: "class", image: classRoom },
    {
      text: "directions",
      image: directions,
      folder: directionsFolder,
      mute: true,
    },
  ];

  const readingFolder = [];

  // const school = [];

  const sportsFolder = [
    { text: "baseball", image: baseballGame },
    { text: "basketball", image: basketballGame },
    { text: "soccer", image: soccer },
    { text: "tennis", image: tennis },
    { text: "swimming", image: swim },
    { text: "golf", image: golf },
  ];

  const watchFolder = [
    { text: "something else", image: changeChannel },
    { text: "comedy", image: comedy },
    { text: "drama", image: drama },
    { text: "movie", image: movie },
    {
      text: "sports",
      image: baseballGame,
      folder: sportsFolder,
      mute: true,
    },
  ];

  const peopleFolder = [
    { text: "people", image: people },
    { text: "mom", image: mom },
    { text: "and", image: and },
    { text: "dad", image: dad },
    { text: "him", image: he },
    { text: "her", image: she },
    { text: "you", image: you },
    { text: "your", image: your },
    { text: "friend", image: friend },
    { text: "teacher", image: teacher },
    { text: "my", image: my },
    { text: "mine", image: mine },
    { text: "they", image: they },
    { text: "we", image: we },
  ];

  const thingsFolder = [
    { text: "animals", image: cat, folder: animalsFolder, mute: true },
    { text: "art", image: art, folder: artFolder, mute: true },
    { text: "body", image: body, folder: bodyFolder, mute: true },
    {
      text: "clothes",
      image: clothes,
      folder: clothesFolder,
      mute: true,
    },
    {
      text: "containers",
      image: container,
      folder: containersFolder,
      mute: true,
    },
    { text: "food", image: food, folder: foodFolder, mute: true },
    { text: "drinks", image: drink, folder: drinksFolder, mute: true },
    {
      text: "furniture",
      image: furniture,
      folder: furnitureFolder,
      mute: true,
    },
    { text: "games", image: toPlay, folder: gamesFolder, mute: true },
    { text: "health", image: medicine, folder: healthFolder, mute: true },
    {
      text: "sports",
      image: baseballGame,
      folder: sportsFolder,
      mute: true,
    },
    { text: "people", image: people, folder: peopleFolder, mute: true },
    {
      text: "kitchen",
      image: refridgerator,
      folder: kitchenFolder,
      mute: true,
    },
  ];

  const describeFolder = [
    { text: "good", image: good },
    { text: "bad", image: bad },
    { text: "more", image: more },
    { text: "funny", image: funny },
    { text: "hot", image: hot },
    { text: "cold", image: cold },
    { text: "nice", image: nice },
    { text: "mean", image: mean },
    { text: "same", image: same },
    { text: "different", image: different },
    { text: "front", image: front },
    { text: "back", image: back },
    { text: "pretty", image: pretty },
    { text: "ugly", image: ugly },
    { text: "wet", image: wet },
    { text: "dry", image: dry },
    { text: "first", image: first },
    { text: "last", image: last },
    { text: "full", image: full },
    { text: "empty", image: empty },
    { text: "loud", image: loud },
    { text: "quiet", image: quiet },
    { text: "fast", image: fast },
    { text: "slow", image: slow },
    {
      text: "directions",
      image: directions,
      folder: directionsFolder,
      mute: true,
    },
    { text: "people", image: people, folder: peopleFolder, mute: true },
    { text: "things", image: things, folder: thingsFolder, mute: true },
  ];

  const wantFolder = [
    { text: "to eat", image: toEat, folder: foodFolder },
    { text: "to drink", image: toDrink, folder: drinksFolder },
    { text: "to watch", image: toWatch, folder: watchFolder },
    { text: "people", image: people, folder: peopleFolder, mute: true },
    { text: "to go", image: toGo, folder: placesFolder },
    { text: "more", image: more, return: true },
    { text: "to play", image: toPlay, folder: gamesFolder },
    { text: "to listen", image: toListen },
    { text: "to read", image: read, folder: readingFolder },
    { text: "to", image: to },
    { text: "it", image: it },
    { text: "the", image: the },
  ];

  const actionsFolder = [
    { text: "to", image: to },
    { text: "feel", image: feelings, folder: feelingsFolder },
    { text: "want", image: iWant, folder: wantFolder },
    { text: "eat", image: toEat, folder: foodFolder },
    { text: "drink", image: toDrink, folder: drinksFolder },
    { text: "come", image: toGo, folder: placesFolder },
    { text: "get", image: toGet },
    { text: "go", image: go },
    { text: "help", image: toHelp },
    { text: "play", image: toPlay },
    { text: "read", image: read },
    { text: "swim", image: swim },
    { text: "walk", image: walk },
    { text: "work", image: work },
    { text: "cook", image: cook, folder: foodFolder },
  ];

  const doesFolder = [
    { text: "does", image: doSymbol },
    { text: "don't", image: dont },
    { text: "the", image: the, return: true },
    { text: "he", image: he, folder: actionsFolder },
    { text: "she", image: she, folder: actionsFolder },
    { text: "you", image: you, folder: actionsFolder },
    { text: "your", image: your, return: true },
    { text: "they", image: they, folder: actionsFolder },
    { text: "we", image: we, folder: actionsFolder },
  ];

  const frontPage = [
    { text: "hello", image: hello },
    { text: "yes", image: yes },
    { text: "no", image: no },
    { text: "I am", image: iAm },
    { text: "I want", image: iWant, folder: wantFolder },
    { text: "I need", image: iNeed },
    { text: "I", image: i, folder: actionsFolder },
    { text: "I like", image: iLike },
    { text: "do", image: doSymbol, folder: doesFolder },
    {
      text: "questions",
      image: why,
      folder: questionsFolder,
      mute: true,
    },
    {
      text: "directions",
      image: directions,
      folder: directionsFolder,
      mute: true,
    },
    { text: "feelings", image: feelings, folder: feelingsFolder, mute: true },
    { text: "people", image: people, folder: peopleFolder, mute: true },
    { text: "things", image: things, folder: thingsFolder, mute: true },
    { text: "describe", image: describe, folder: describeFolder, mute: true },
    { text: "actions", image: walk, folder: actionsFolder, mute: true },
  ];

  const synth = window.speechSynthesis;

  const [text, setText] = useState("");
  const [cards, setCards] = useState(frontPage);
  const [prevCards, setPrevCards] = useState(cards);

  const resetText = useLongPress(() => {
    setText("");
  });

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
        <CardMedia image={item.image} />
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
        {cards.map((item) => display(item))}
      </Grid>
    </>
  );
}

export default Main;
