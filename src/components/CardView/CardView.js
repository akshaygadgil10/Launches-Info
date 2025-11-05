import React from "react";
import "./CardView.css";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import YouTubeIcon from "@material-ui/icons/YouTube";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";

const CardView = ({
  flight_number,
  rocket_name,
  wikipedia,
  youtube,
  image,
  mission_name,
  viewDetails,
  launch,
}) => {
  const details = (detail) => {
    viewDetails(detail);
  };
  return (
    <Card
      elevation={5}
      style={{
        width: "-webkit-fill-available",
        minHeight: "360px",
        maxHeight: "360px",
        padding: "0px",
      }}
    >
      <CardContent>
        <img
          src={image ? image : "/space-shuttle-discovery.png"}
          alt="Error in loading image"
          style={{
            minHeight: "160px",
            maxHeight: "160px",
            border: "2px solid lightgray",
          }}
        ></img>
        <Typography gutterBottom variant="h7" component="h4">
          Flight Number : {flight_number}
        </Typography>
        <Typography gutterBottom variant="h7" component="h4">
          Rocket Name : {rocket_name}
        </Typography>
        <Typography gutterBottom variant="h7" component="h4">
          Mission Name : {mission_name}
        </Typography>
      </CardContent>
      <CardContent centered>
        <a href={wikipedia} target="_blank">
          <IconButton aria-label="Wiki Link">
            <LinkIcon />
          </IconButton>
        </a>
        <a href={youtube} target="_blank">
          <IconButton aria-label="Youtube Video">
            <YouTubeIcon color="secondary" />
          </IconButton>
        </a>
        <IconButton aria-label="Youtube Video">
          <VisibilityRoundedIcon onClick={() => details(launch)} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CardView;
