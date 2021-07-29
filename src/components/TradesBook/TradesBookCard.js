import React from 'react';
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { differenceInHours } from 'date-fns';


const useStyle = makeStyles((theme) => ({
    wrapper: {
        border: '1px solid #e8e8e8',
        cursor: 'pointer',
        transition: '.3s',

        '&:hover': {
            boxShadow: '0px 5px 25px rgba(0, 0, 0, 0.1)',
            borderLeft: '1.5px solid #4D64E4',
        }
    },
    status: {
        fontSize: '13.5px',
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(0.75),
        borderRadius: '5px',
        display: 'inline-block',
        fontWeight: 600,
    },
}));


const TradesBookCard = (props) => {
    const classes = useStyle();
    return (
        <Box p={2} className={classes.wrapper}>
            <Grid container alignItems='center'>
                <Grid item xs>
                    <Typography variant='subtitle1'>{props.type}</Typography>
                    <Typography className={classes.status} variant='subtitle1'>{props.status}</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant='subtitle1'>{props.buyer}</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant='subtitle1'>{props.seller}</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant='subtitle1'>₹ {props.originalPrice}</Typography>
                </Grid>
                <Grid item xs>
                    <Typography variant='subtitle1'>₹ {props.acceptedPrice}</Typography>
                </Grid>
                <Grid item container direction='column' alignItems='flex-end' xs>
                    <Grid item>
                        <Typography variant='caption'>{differenceInHours(Date.now(), props.postedOn)} min ago | {props.type} | {props.status}</Typography>
                    </Grid>
                    <Grid item>
                        <Box mt={2}>
                            <Button onClick={props.open} variant='outlined'>View</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TradesBookCard;
