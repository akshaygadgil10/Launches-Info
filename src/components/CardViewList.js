/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchLaunchData } from '../store/launch-action';
import CardView from "./CardView";
import { Grid } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { launchActions } from '../store/launch-slice';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  //new
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const CardViewList = (props) => {
  console.log("CardViewList");
  const classes = useStyles();
  const dispatch = useDispatch();
  const launchItems = useSelector((state) => state.launch.items);
  const [searchKeyword, setSearchKeyword] = useState();

  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchLaunchData());
  }, [dispatch]);

  console.log("launchItems ", launchItems);

  const showResult = () => {
    dispatch(launchActions.searchRocket(searchKeyword))
  }
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Launches Info
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => {
                  setSearchKeyword(e.target.value)
                }}
              />
            </div>
            <div>
              <Button variant="contained" color="primary" onClick={() => showResult()}>
                ok
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
      <Grid container spacing={2}>
        {launchItems.map((launch) => (
          <Grid item xs={6} sm={3} >
            <CardView flight_number={launch.flight_number}
              rocket_name={launch.rocket.rocket_name}
              wikipedia={launch.links.wikipedia}
              youtube={launch.links.video_link}
              image={launch.links.mission_patch}
              image_small={launch.links.mission_patch_small}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CardViewList;
