import React from 'react';
import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    makeStyles,
    IconButton,
    Button,
} from "@material-ui/core";
import { Close } from '@material-ui/icons';
import { format } from 'date-fns';


const useStyle = makeStyles((theme) => ({
    info: {
        '& > *': {
            margin: '4px'
        }
    },
}));


const ViewTradesBook = (props) => {
    const classes = useStyle();
    return (
        <Dialog open={!!Object.keys(props.viewData).length} fullWidth>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    <IconButton onClick={props.closeModal} >
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Updated on:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.postedOn && format(props.viewData.postedOn, 'dd/MMM/yyyy HH:MM')}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Confirmation ID:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.confirmationID}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Type:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.type}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Status:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.status}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Buyer:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.buyer}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Seller:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.seller}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Broker:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.broker}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Variety:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.variety}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Quantity:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.quantity}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Quantity unit:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.quantityUnit}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Original price:</Typography>
                        <Typography variant='body2'>
                            ₹{props.viewData.originalPrice}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Accepted Price:</Typography>
                        <Typography variant='body2'>
                            ₹{props.viewData.acceptedPrice}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Price Unit:</Typography>
                        <Typography variant='body2'>
                            ₹/{props.viewData.priceUnit}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Created At:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.createdAt}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Confirmed At:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.confirmedAt}
                        </Typography>
                    </Box>
                    <Box className={classes.info} display='flex'>
                        <Typography variant='caption'>Dhara:</Typography>
                        <Typography variant='body2'>
                            {props.viewData.Dhara}
                        </Typography>
                    </Box>
                </Box>
            </DialogContent>
             <DialogActions>
                <Button onClick={props.closeModal} variant='outlined'>Close</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ViewTradesBook;
