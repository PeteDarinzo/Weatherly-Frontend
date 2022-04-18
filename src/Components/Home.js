import React from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import MovieCard from "./MovieComponents/MovieCard";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import determineMatch from "../Helpers/determineMatch";
import ForecastPaper from "./ForecastComponents/ForecastPaper";
import { v4 as uuid } from "uuid";
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';

/**
 * Display a random weather proverb on the logged in landing page.
 * 
 * Proverbs taken from the following sources:
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
];

const Home = () => {

  const forecast = useSelector(store => store.forecast);
  const userData = useSelector(store => store.user);
  const titles = useSelector(store => store.titles);  


  // show upcoming three day forecast and four recent'y saved movies on landing page
  const abbreviatedForecast = forecast.slice(1, 4); 
  const titleSelection = titles.slice(-4);

  let proverbNum = Math.floor(Math.random() * WEATHER_PROVERBS.length)

  return (
    <Container>

      <Stack spacing={4}>

        <ListItem>
          <Typography variant="h2" sx={{mt: 3}}>
            Hello, {userData.username}!
          </Typography>
        </ListItem>

        <ListItem>
          <Typography
            sx={{ fontStyle: "italic", textAlign: "center", margin: "auto", fontSize: "2rem" }}
          >"{WEATHER_PROVERBS[proverbNum]}"</Typography>
        </ListItem>

        <ListItem>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h5">
                Three day forecast:
              </Typography>
            </Grid>
            {abbreviatedForecast.map(day => {
              let compatibility = determineMatch(day, userData);
              return (
                <Grid item xs={12} sm={6} md={3} key={uuid()}>
                  <ForecastPaper
                    day={day.name}
                    date={day.date}
                    min={day.temp.min}
                    max={day.temp.max}
                    feelsLike={day.feels_like.day}
                    description={(day.weather[0]).description}
                    icon={(day.weather[0]).icon}
                    units={userData.units === "imperial" ? "F" : "C"}
                    compatibility={compatibility} />
                </Grid>
              );
            })}
            <Button
              component={Link}
              to="/forecast"
              variant="outlined"
              sx={{ m: 4 }}
              size="large"
              color="primary"
            >
              SEE FULL FORECAST</Button>
          </Grid>
        </ListItem>

        <ListItem>
          <Grid container spacing={4} >
            <Grid item xs={12}>
              <Typography variant="h5">
                Recently added movies:
              </Typography>
            </Grid>
            {titleSelection.map(m => {
              return (
                <Grid item xs={12} sm={4} md={3} lg={2} key={m.id}>
                  <MovieCard id={m.id} title={m.title} img={m.posterUrl} plot={m.plot} />
                </Grid>);
            })}
            <Button
              component={Link}
              to="/movies"
              variant="outlined"
              sx={{ m: 4 }}
              size="large"
              color="primary"
            >
              SEE ALL MOVIES</Button>
          </Grid>
        </ListItem>
        
      </Stack>
    </Container>
  );
}

export default Home;