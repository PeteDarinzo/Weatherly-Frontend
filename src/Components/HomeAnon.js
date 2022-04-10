import React from "react";
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

/**
 * https://www.almanac.com/content/weather-sayings-and-their-meanings
 * https://www.artofmanliness.com/skills/outdoor-survival/22-old-weather-proverbs-that-are-actually-true/
 * https://www.nps.gov/grte/learn/education/classrooms/upload/Weather-Lore-Sayings.pdf
 * http://weatherstories.ssec.wisc.edu/sayings/sayings.html
 * https://www.readwritethink.org/sites/default/files/resources/lesson_images/lesson775/CollectionSayings.pdf
 * https://cottagelife.com/outdoors/8-mostly-reliable-weather-proverbs/
 */
const WEATHER_PROVERBS = [
  "Red sky at night, sailors delight. Red sky in morning, sailors take warning.",
  "Clear Moon, frost soon.",
  "When clouds appear like towers, the Earth is refreshed by frequent showers.",
  "Rainbow in the morning gives you fair warning.",
  "Ring around the moon, rain real soon.",
  "Rain foretold, long last. Short notice, soon will pass.",
  "When dew is on the grass, rain will never come to pass.",
  "Frogs croaking in the lagoon, means rain will come real soon.",
  "Mackerel skies and mares’ tails make tall ships carry low sails.",
  "When the ass begins to bray, surely rain will come that day.",
  "When your joints all start to ache, rainy weather is at stake.",
  "When the glass falls low, prepare for a blow; when the glass is high, let your kites fly.",
  "The moon, her face be red, of water she speaks.",
  "If the goose honks high, fair weather. If the goose honks low, foul weather.",
  "When grass is dry at morning light, look for rain before the night.",
  "If birds fly low expect rain and a blow.",
  "When the forest murmurs and the mountains roar, close your windows and shut the doors.",
  "Moss dry, sunny sky, moss wet, rain you'll get.",
  "Evening red and morning gray, send a traveler on his way. Evening gray and morning red, brings the rain upon his head.",
  "A wind from the south has rain in its mouth.",
  "If the rooster crows on going to bed, you may rise with a watery head.",
  "If dogs and horses sniff the air, a summer shower will soon be there. "
]

/** Landing page for logged out users */

const HomeAnon = () => {

  let proverbNum = Math.floor(Math.random() * WEATHER_PROVERBS.length)

  return (
    <Container>
      <Typography variant="h6" sx={{ fontStyle: "italic", textAlign: "center", margin: "20px" }}>"{WEATHER_PROVERBS[proverbNum]}"</Typography>
      <Typography variant="h2" sx={{ margin: "20px" }}>WELCOME TO WEATHERLY</Typography>
      <Typography variant="h5" sx={{ marginTop: "10px", marginBottom: "10px", textAlign: "center" }}>What is it?</Typography>
      <Typography sx={{ textAlign: "center" }}>Your time is valuable.</Typography>
      <Typography sx={{ textAlign: "center" }}>Don't scroll endlessly looking for something to watch on a sunny day.</Typography>
      <Typography sx={{ textAlign: "center" }}>Keep your "to-watch" list close at hand.</Typography>
      <Typography sx={{ textAlign: "center" }}>Let the app find the next inclement weather day for you.</Typography>
      <Typography sx={{ margin: "10px", textAlign: "center" }}>New to Weatherly? <Button component={Link} to="/signup" variant="outlined">Signup</Button></Typography>
      <Typography sx={{ margin: "10px", textAlign: "center" }}>Already a user? <Button component={Link} to="/login" variant="outlined">Login</Button></Typography>

    </Container>
  )
}

export default HomeAnon;