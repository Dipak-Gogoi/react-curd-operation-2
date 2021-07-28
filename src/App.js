import { ThemeProvider, Box, Grid } from "@material-ui/core";
import theme from './theme/theme';
import Header from './components/Header/Header';
import Search from "./components/Search/Search";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box mb={3}>
        <Grid container justifyContent='center'>
          <Grid item xs={10}>
            <Search />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
