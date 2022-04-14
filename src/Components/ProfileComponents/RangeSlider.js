import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

const farMarks = [
  {
    value: 32,
    label: '32°F',
  },
  {
    value: 45,
    label: '45°F',
  },
  {
    value: 60,
    label: '60°F',
  },
  {
    value: 80,
    label: '80°F',
  },
  {
    value: 100,
    label: '100°F',
  }
];

const celMarks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 10,
    label: '10°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 30,
    label: '30°C',
  },
  {
    value: 40,
    label: '40°C',
  }
];

let minDistance;

export default function RangeSlider({ handleTempChange, units, vals }) {

  const [values, setValues] = useState([20, 40]);

  useEffect(() => {
    if (!vals[0]) {
      if (units === "imperial") {
        setValues([50, 80]);
        minDistance = 10;
      } else {
        setValues([10, 30]);
        minDistance = 5;
      }
    } else {
      setValues(vals);
    }
  }, [units])



  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValues([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValues([clamped - minDistance, clamped]);
      }
    } else {
      setValues(newValue);
    }
    handleTempChange(values);
  };

  return (
    <Box my={3} px={4} py={1} pt={5} border="solid" sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={values}
        onChange={handleChange2}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disableSwap
        track="inverted"
        min={units === "imperial" ? 32 : 0}
        max={units === "imperial" ? 100 : 40}
        marks={units === "imperial" ? farMarks : celMarks}
      />
    </Box>
  );
}