import React from 'react';
import './CardView.css';
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

const CardView = ({ flight_number, rocket_name,wikipedia,youtube,image,image_small }) => {
  // console.log(flight_number);
  return (
    <Card >
      <CardContent>
          <img src={image}  style={{width : '-webkit-fill-available'}}></img>
          <Typography gutterBottom variant="h5" component="h2">
            Flight Number : {flight_number}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Rocket Name : {rocket_name}
          </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <a href={wikipedia} target="_blank">
          <IconButton aria-label="Wiki Link" >
            <LinkIcon />
          </IconButton>
        </a>
        <a href={youtube} target="_blank">
          <IconButton aria-label="Youtube Video" >
            <YouTubeIcon color='secondary' />
          </IconButton>
        </a>
        <IconButton aria-label="Youtube Video" >
            < VisibilityRoundedIcon/>
          </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardView;

