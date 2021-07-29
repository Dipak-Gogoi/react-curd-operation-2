import React, {useState} from 'react';
import { Box, Button, Select, MenuItem, makeStyles, CircularProgress } from "@material-ui/core";


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
    const [loading, setLoading] = useState(false);
    const [tradesDataSearch, setTradesDataSearch] = useState({
        type: 'Buyer',
        status: 'Complete',
    });

    const handleChange = (e) => {
        e.persist();
        setTradesDataSearch((oldState) => ({
            ...oldState,
            [e.target.name]: e.target.value,
        }));
    };
    // console.log(tradesDataSearch);

    const search = async () => {
        setLoading(true);
        await props.searchTradesData(tradesDataSearch);
        setLoading(false);
    };


    const classes = useStyles();
    return (
        <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
            <Select onChange={handleChange} value={tradesDataSearch.type} name='type' disableUnderline variant='filled'>
                <MenuItem value='Buyer'>Buyer</MenuItem>
                <MenuItem value='Seller'>Seller</MenuItem>
            </Select>
            <Select onChange={handleChange} value={tradesDataSearch.status} name='status' disableUnderline variant='filled'>
                <MenuItem value='Complete'>Complete</MenuItem>
                <MenuItem value='Not-Complete'>Not-Complete</MenuItem>
            </Select>
            <Button
                disabled={loading}
                onClick={search}
                variant='contained'
                color='primary'
            >
                {
                    loading ? (
                        <CircularProgress color='secondary' size={22} />
                    ) : (
                            'Search'
                        )
                }
            </Button>
        </Box>
    )
};

export default Search;