import { Container, ImageList, Paper, Typography , Switch} from '@material-ui/core';
import Navbar from './components/Navbar';
import {createTheme, ThemeProvider  } from '@material-ui/core/styles';
import Games from './components/Games';
import Imagelist from './components/Imagelist'
import { useState } from 'react';
import Tournaments from './components/Tournaments';

function App() {
const[darkmode, setdarkmode] = useState(false);

  const DarkTheme = createTheme({
    palette: {
      type:"dark",
    },
  });
  return (
    <ThemeProvider theme={DarkTheme}>
      <Paper style={{height:"500vh"}}>
     <Navbar/>
        {/* <Switch checked= {darkmode} onchange={()=> setdarkmode (!darkmode)}></Switch> */}
            {/* <ResponsiveAppBar/> */}
     <Container>
     {/* <Games/> */}
     <Tournaments/>
     <Imagelist/>
     </Container>
     </Paper>
     </ThemeProvider>
  );
}

export default App;
