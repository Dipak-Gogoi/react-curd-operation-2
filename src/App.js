import React, { useEffect, useState } from 'react';
import { firestore, app } from './firebase/config';
import { ThemeProvider, Box, Grid, CircularProgress, Button } from "@material-ui/core";
import { Close } from '@material-ui/icons';
import theme from './theme/theme';
import Header from './components/Header/Header';
import Search from "./components/Search/Search";
import TradesBookCard from "./components/TradesBook/TradesBookCard";
import NewTradesBookModal from './components/TradesBook/NewTradesBookModal';
import ViewTradesBook from './components/TradesBook/ViewTradesBook';


function App() {
  const [tradesdata, setTradesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newDataModal, setNewDataModal] = useState(false);
  const [customSearch, setCustomSearch] = useState(false);
  const [viewData, setViewData] = useState({});

  const fetchData = async () => {
    setCustomSearch(false);
    setLoading(true);
    const req = await firestore
      .collection('Trades')
      .orderBy('postedOn', 'desc')
      .get();
    // console.log(req);
    const tempTrades = req.docs.map((trades) => ({
      ...trades.data(),
      id: trades.id,
      postedOn: trades.data().postedOn.toDate(),
    }));
    // console.log(tempTrades);
    setTradesData(tempTrades);
    setLoading(false);
  };


  const searchTradesData = async (tradesData) => {
    setLoading(true);
    setCustomSearch(true);
    const req = await firestore
      .collection('Trades')
      .orderBy('postedOn', 'desc')
      .where('status', '==', tradesData.status)
      .where('type', '==', tradesData.type)
      .get();
    console.log(req);
    const tempTrades = req.docs.map((trades) => ({
      ...trades.data(),
      id: trades.id,
      postedOn: trades.data().postedOn.toDate(),
    }));
    // console.log(tempJobs);
    setTradesData(tempTrades);
    setLoading(false);
  };

  const postTradesData = async (tradesDataDetails) => {
    await firestore.collection('Trades').add({
      ...tradesDataDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp(),
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openNewDataModal = () => {
    setNewDataModal(true);
  };

  const closeNewDataModal = () => {
    setNewDataModal(false)
  };


  return (
    <ThemeProvider theme={theme}>
      <Header openNewDataModal={openNewDataModal}  />
      <NewTradesBookModal
        closeNewDataModal={closeNewDataModal}
        newDataModal={newDataModal}
        postTradesData={postTradesData}
      />
      <ViewTradesBook 
        viewData={viewData}
        closeModal={() => setViewData({})}
      />
      <Box mb={3}>
        <Grid container justifyContent='center'>
          <Grid item xs={10}>
            <Search searchTradesData={searchTradesData} />
            {
              loading ? (
                <Box display='flex' justifyContent='center'>
                  <CircularProgress />
                </Box>
              ) : (
                  <>
                    {customSearch && (
                      <Box my={2} display='flex' justifyContent='flex-end'>
                        <Button onClick={fetchData}>
                          <Close seize={20} />
                          Custom Search
                  </Button>
                      </Box>
                    )}
                    {tradesdata.map((trades) => (
                      <TradesBookCard open={() => setViewData(trades)} key={trades.id} {...trades} />
                    ))}
                  </>
                )
            }
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
