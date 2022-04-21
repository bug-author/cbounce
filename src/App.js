import './App.css';
// import CurrentDate from './components/CurrentDate';
// import MainLogo from './components/MainLogo';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          {/* date */}
          <Item>xs=3</Item>
        </Grid>

        <Grid item xs={5}>
          {/* logo */}
          <Item>xs=5</Item>
        </Grid>

        <Grid item>
          {/* empty */}
        </Grid>

      </Grid>
    </>
  );
}

export default App;
