/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import SearchIcon from '@material-ui/icons/Search';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { fetchLaunchData } from '../store/launch-action';
import { launchActions } from '../store/launch-slice';
import CardView from "./CardView";
import LaunchDetails from './LaunchDetails';

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
    marginLeft: '10px',
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
  datefilter: {
    width: '15%',
    height: '20%',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  }
}));

const CardViewList = (props) => {
  console.log("CardViewList");
  const classes = useStyles();
  const dispatch = useDispatch();
  const launchItems = useSelector((state) => state.launch.items);
  const [searchKeyword, setSearchKeyword] = useState();
  const [dateRange, setDateRange] = React.useState('');
  const [launchStatus, setLaunchStatus] = React.useState('');
  const [detailInfo, setDetailInfo] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    console.log('useEffect');
    dispatch(fetchLaunchData());
  }, [dispatch]);

  console.log("launchItems ", launchItems);

  const handleChangeDateRange = (event) => {
    setDateRange(event.target.value);
    // dispatch(launchActions.getListByDateRange(event.target.value))
  };
  const handleChangeLaunchStatus = (event) => {
    // console.log('handleChangeLaunchStatus');
    // console.log(event.target.value);
    setLaunchStatus(event.target.value);
    // dispatch(launchActions.getListByStatus(event.target.value))
  };
  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };
  const viewDetails = (detail) => {
    console.log(detail);
    setDetailInfo(detail)
    setOpen(true);
  }
  const closeDetails = (detail) => {
    setOpen(false);
  }
  // console.log('dateRange', dateRange);
  // console.log('launchStatus', launchStatus);
  // console.log('checked', checked);
  
  const showResult = () => {
    let data = {}

    if(searchKeyword || !searchKeyword){
      console.log('sear call()');
      dispatch(launchActions.searchRocket(searchKeyword))
    }
    if(dateRange){
      console.log('dateRange call()');
      dispatch(launchActions.getListByDateRange(dateRange))
    }
    
    if (launchStatus){
      console.log('laun call()');
      dispatch(launchActions.getListByStatus(launchStatus))
    }
    if(checked){
      console.log('check call()');
    }
    else{
      console.log('else');
    }
    dispatch(launchActions.getUpcommingList(checked))
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
            <Typography className={classes.title} noWrap>
              Date Range
            </Typography>
            <FormControl className={classes.datefilter}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={dateRange}
                onChange={handleChangeDateRange}
                label="Date Range"
              >
                <MenuItem value={'none'}>None</MenuItem>
                <MenuItem value={'last_week'}>Last Week</MenuItem>
                <MenuItem value={'last_month'}>Last Month</MenuItem>
                <MenuItem value={'last_year'}>Last Year</MenuItem>
              </Select>
            </FormControl>

            <Typography className={classes.title} noWrap>
              Launch Status
            </Typography>
            <FormControl className={classes.datefilter}>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={launchStatus}
                onChange={handleChangeLaunchStatus}
                label="Date Range"
              >
                <MenuItem value={'none'}>None</MenuItem>
                <MenuItem value={'failure'}>Failure</MenuItem>
                <MenuItem value={'success'}>Success</MenuItem>
              </Select>
            </FormControl>
            <Typography className={classes.title} noWrap>
              Upcoming
            </Typography>
            <Checkbox
              checked={checked}
              color="default"
              onChange={handleChangeCheckbox}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <div>
              <Button variant="contained" color="primary" 
                onClick={() => showResult()}
                >
                ok
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container spacing={2}>
        {launchItems.map((launch) => (
          <Grid item xs={6} sm={3} >
            <CardView flight_number={launch.flight_number}
              rocket_name={launch.rocket.rocket_name}
              wikipedia={launch.links.wikipedia}
              youtube={launch.links.video_link}
              image={launch.links.mission_patch}
              mission_name={launch.mission_name}
              viewDetails={viewDetails}
              launch={launch}
            />
          </Grid>
        ))}
      </Grid>
      <LaunchDetails open={open} detailInfo={detailInfo} closeDetails={closeDetails} />
    </>
  )
}

export default CardViewList;
