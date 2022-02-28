import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography >{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


export default function LaunchDetails(props) {
    console.log(props);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        props.closeDetails(false)
    };

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={props.open}>
                <img src={props.detailInfo.links?.mission_patch ? props.detailInfo.links.mission_patch : '/space-shuttle-discovery.png'} alt="Error in loading image" style={{ width: '-webkit-fill-available', minHeight: '350px', maxHeight: '500px', border: '2px solid lightgray' }}></img>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography gutterBottom variant="h8" component="h4">Flight Number : {props.detailInfo.flight_number}</Typography>
                    <Typography gutterBottom variant="h8" component="h4">Rocket Name : {props.detailInfo.rocket?.rocket_name}</Typography>
                    <Typography gutterBottom variant="h8" component="h4">Mission Name : {props.detailInfo.mission_name}</Typography>
                    <Typography gutterBottom variant="h8" component="h4">Launch Site Name : {props.detailInfo.launch_site?.site_name}</Typography>
                    <Typography gutterBottom variant="h8" component="h4">Launch Date : {props.detailInfo.launch_date_local?.slice(0, 10)}</Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom variant="h9" component="h5">Details : {props.detailInfo.details}</Typography>
                    <Typography gutterBottom variant="h9" component="h5">Rocket First Starge</Typography>
                    <Typography gutterBottom variant="h9" component="h5">Landing Type : {props.detailInfo.rocket?.first_stage.cores[0].landing_type}</Typography>
                    <Typography gutterBottom variant="h9" component="h5">Landing Vehicle : {props.detailInfo.rocket?.first_stage.cores[0].landing_vehicle}</Typography>
                    <Typography gutterBottom variant="h9" component="h5">Rocket Second Starge</Typography>
                    <Typography gutterBottom variant="h9" component="h5">Cap serial : {props.detailInfo.rocket?.second_stage.payloads[0].cap_serial}</Typography>
                    <Typography gutterBottom variant="h9" component="h5">Manufacturer : {props.detailInfo.rocket?.second_stage.payloads[0].manufacturer}</Typography>
                    <Typography gutterBottom variant="h9" component="h5">Orbit : {props.detailInfo.rocket?.second_stage.payloads[0].orbit}</Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}