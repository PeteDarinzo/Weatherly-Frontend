import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserLocationForm from "./UserLocationForm";
import UserPreferencesForm from "./UserPreferencesForm";
import Grid from '@mui/material/Grid';


const UserDashboard = ({ updateUser }) => {

  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector(store => store.user);
  const { postalCode, countryCode, minTemp, maxTemp, units, thunderstorm, drizzle, rain, snow, overcast } = userData;

  useEffect(() => {

    const data = Object.keys(userData);

    if (data.length) {
      setIsLoading(false);
    }

  }, [userData])

  if (isLoading) return (<b>Loading...</b>)

  return (
    <Container>
      <Typography sx={{ m: 5 }} variant="h2">Your profile:</Typography>
      <Grid container
        alignItems="center"
        justifyContent="center"
      >
        <Grid item md={6}>
          <UserPreferencesForm
            units={units}
            minTemp={minTemp}
            maxTemp={maxTemp}
            thunderstorm={thunderstorm}
            drizzle={drizzle}
            rain={rain}
            snow={snow}
            overcast={overcast}
            updateUserPreferences={updateUser} />
        </Grid>
        <Grid item md={6}>
          <UserLocationForm
            postalCode={postalCode}
            countryCode={countryCode}
            updateUserLocation={updateUser} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserDashboard;