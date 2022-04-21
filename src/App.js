import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import MainLogo from './components/MainLogo';
import CurrentDate from './components/CurrentDate';
import Marquee from 'react-fast-marquee';
import {
  Box
} from '@mui/system';
function App() {
  return (
    <>
      <Box m={1}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            {/* date */}
            <CurrentDate />
          </Grid>

          <Grid item xs={6}>
            {/* logo */}
            <MainLogo />
          </Grid>

          <Grid item>
            {/* empty */}
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Marquee>
              Crypto Coin Prices Ticker Plaeholder
            </Marquee>
          </Grid>


        </Grid>
      </Box>
    </>
  );
}

export default App;
