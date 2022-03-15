import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SearchCard = ({ id, title, posterUrl, saveMovie }) => {

  function handleClick() {

    saveMovie({ id, title, posterUrl });
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={posterUrl}
        alt={title}
        sx={{ maxWidth: "50%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">Save</Button>
      </CardActions>
    </Card>
  );
}

export default SearchCard;