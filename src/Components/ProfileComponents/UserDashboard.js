import { Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RangeSlider from "./RangeSlider";
import { countryList, countryListAlpha2, codeListAlpha2 } from "../../countryData";
import { makeStyles } from "@mui/styles";
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import UserLocationForm from "./UserLocationForm";
import UserPreferencesForm from "./UserPreferencesForm";


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
});


const UserDashboard = ({ updateUser }) => {

  // const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);
  const userData = useSelector(store => store.user);
  const { postalCode, countryCode, minTemp, maxTemp, units, thunderstorm, drizzle, rain, snow, overcast } = userData;

  // const initialState = {
  //   postalCode,
  //   countryCode,
  //   minTemp,
  //   maxTemp,
  //   units,
  //   thunderstorm,
  //   drizzle,
  //   rain,
  //   snow,
  //   overcast
  // }

  useEffect(() => {

    if (userData) {
      //   setFormData({
      //     postalCode,
      //     countryCode,
      //     minTemp,
      //     maxTemp,
      //     units,
      //     thunderstorm,
      //     drizzle,
      //     rain,
      //     snow,
      //     overcast
      //   });
      setIsLoading(false);
    }

  }, [userData])

  // const [formData, setFormData] = useState(initialState);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(formData => ({
  //     ...formData,
  //     [name]: value
  //   }));
  //   console.log(formData);
  // }

  // function handleTempChange(tempArray) {
  //   setFormData(formData => ({
  //     ...formData,
  //     minTemp: tempArray[0],
  //     maxTemp: tempArray[1]
  //   }));
  // }

  // function handleToggle(e) {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.checked
  //   });
  //   console.log(formData);
  // }


  if (isLoading) return (<b>Loading...</b>)

  return (
    <Container>
      <UserLocationForm postalCode={postalCode} countryCode={countryCode} updateUserLocation={updateUser} />
      <UserPreferencesForm units={units} minTemp={minTemp} maxTemp={maxTemp} thunderstorm={thunderstorm} drizzle={drizzle} rain={rain} snow={snow} overcast={overcast} updateUserPreferences={updateUser} />
    </Container>
  );
}

export default UserDashboard;