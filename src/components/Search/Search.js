import React from 'react';
import { Box, Button, Select, MenuItem, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    wrapper: {
        backgroundColor: '#fff',
        display: 'flex',
        boxShadow: ' 0px 1px 5px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        '& > *': {
            flex: 1,
            height: '45px',
            margin: '8px'
        }
    }
});


const Search = (props) => {
    const classes = useStyles();
    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange='' value='' name='type' disableUnderline variant='filled'>
                <MenuItem value='Buyer'>Buyer</MenuItem>
                <MenuItem value='Seller'>Seller</MenuItem>
            </Select>
            <Select onChange='' value='' name='status' disableUnderline variant='filled'>
                <MenuItem value='Complete'>Complete</MenuItem>
                <MenuItem value='Not-Complete'>Not-Complete</MenuItem>
            </Select>
            <Button
                disabled=''
                onClick=''
                variant='contained'
                color='primary'
            >
                Search
            </Button>
        </Box>
    )
};

export default Search;