import React, { useState } from 'react';
import {
    Box,
    Grid,
    FilledInput,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button,
    IconButton,
    CircularProgress
} from "@material-ui/core";
import { Close } from '@material-ui/icons';

const initState = {
    type: 'Buyer',
    status: 'Complete',
    buyer: '',
    seller: '',
    broker: '',
    variety: '',
    station: '',
    deliveryBy: '',
    quantity: '',
    quantityUnit: '',
    confirmationID: '',
    originalPrice: '',
    acceptedPrice: '',
    priceUnit: '',
    createdAt: '',
    confirmedAt: '',
    Dhara: '',
};

const NewTradesBookModal = (props) => {
    const [loading, setLoading] = useState(false);
    const [tradesDataDetails, setTradesDataDetails] = useState(initState);

    const handleChange = (e) => {
        e.persist();
        setTradesDataDetails((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };


    const handleSubmit = async () => {
        // for (const field in tradesDataDetails) {
        //     if (typeof tradesDataDetails[field] === 'string' && !tradesDataDetails[field]) {
        //         return;
        //     }
        //     if (!tradesDataDetails.skills.length) {
        //         return;
        //     }
        // }

        setLoading(true);
        await props.postTradesData(tradesDataDetails);
        closeModal();
    };

    const closeModal = () => {
        setTradesDataDetails(initState);
        setLoading(false);
        props.closeNewDataModal();
    };



    return (
        <Dialog open={props.newDataModal} fullWidth>
            <DialogTitle>
                <Box display='flex' justifyContent='space-between' alignItems='center'>
                    Update Book Trades
                    <IconButton onClick={closeModal}>
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Select
                            onChange={handleChange}
                            name='type'
                            value={tradesDataDetails.type}
                            fullWidth
                            disableUnderline
                            variant='filled'
                        >
                            <MenuItem value='Buyer'>Buyer</MenuItem>
                            <MenuItem value='Seller'>Seller</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            onChange={handleChange}
                            name='status'
                            value={tradesDataDetails.status}
                            fullWidth
                            disableUnderline
                            variant='filled'
                        >
                            <MenuItem value='Complete'>Complete</MenuItem>
                            <MenuItem value='Not-Complete'>Not-Complete</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='buyer'
                            value={tradesDataDetails.buyer}
                            autoComplete='off'
                            placeholder='Buyer *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='seller'
                            value={tradesDataDetails.seller}
                            autoComplete='off'
                            placeholder='Seller *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='broker'
                            value={tradesDataDetails.broker}
                            autoComplete='off'
                            placeholder='Broker *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='variety'
                            value={tradesDataDetails.variety}
                            autoComplete='off'
                            placeholder='Variety *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='quantity'
                            value={tradesDataDetails.quantity}
                            autoComplete='off'
                            placeholder='Quantity *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='quantityUnit'
                            value={tradesDataDetails.quantityUnit}
                            autoComplete='off'
                            placeholder='Quantity Unit *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='confirmationID'
                            value={tradesDataDetails.confirmationID}
                            autoComplete='off'
                            placeholder=' Confirmation ID *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='originalPrice'
                            value={tradesDataDetails.originalPrice}
                            autoComplete='off'
                            placeholder='Original Price *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='acceptedPrice'
                            value={tradesDataDetails.acceptedPrice}
                            autoComplete='off'
                            placeholder='Accepted Price *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='priceUnit'
                            value={tradesDataDetails.priceUnit}
                            autoComplete='off'
                            placeholder='Price Unit *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='createdAt'
                            value={tradesDataDetails.createdAt}
                            autoComplete='off'
                            placeholder='Created At *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='confirmedAt'
                            value={tradesDataDetails.confirmedAt}
                            autoComplete='off'
                            placeholder='Confirmed At *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FilledInput
                            onChange={handleChange}
                            name='Dhara'
                            value={tradesDataDetails.Dhara}
                            autoComplete='off'
                            placeholder='Dhara *'
                            disableUnderline
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Box color='red' width='100%' display='flex' justifyContent='space-between' alignItems='center'>
                    <Typography variant='caption'>*Required fields</Typography>
                    <Button
                        onClick={handleSubmit}
                        variant='contained'
                        color='primary'
                        disabled={loading}
                    >
                        {
                            loading ? (
                                <CircularProgress color='secondary' size={22} />
                            ) : (
                                    'Update'
                                )
                        }
                    </Button>
                </Box>
            </DialogActions>
        </Dialog>
    )
}

export default NewTradesBookModal;
