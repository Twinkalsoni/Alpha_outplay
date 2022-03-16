import { AppBar, Button, Icon, Switch, Toolbar, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { Box, Link } from '@material-ui/core'
import Logo from '../images/Logo.png'
import { Spacing } from '@mui/system';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Container from '@mui/material/Container';
import { makeStyles, Paper } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   Paper: {
//     padding: theme.Spacing(2),
//     textalign: 'center',
//     color: theme.pallete.text.secondary,
//   },
// }));

export default function Navbar() {
  // const classes = useStyles();

  return (
    <AppBar position='static' color='inherit' >
      <Container maxWidth="xl">
        <Toolbar >
          <Box component="img" src={Logo} height={50} width={150} sx={{ mr: 10 }} />
          {/* <Box sx={{ mr: 50, display: "flex", display: { xs: 'flex' } }} > */}

          {/* <div direction="row" > */}
            <Box sx={{ mr: 50, display: "flex", display: { xs: 'flex' } }} >

              <Grid Container Spacing={2} direction="row" justifyContent='flex-end' >

                <Grid item xl={12} spacing={2} container>
                  <Grid item xl={3} >
                    <Icon color="secondary">{<SportsEsportsOutlinedIcon />}</Icon>
                    <Link color='secondary' underline='always'>Play</Link>
                  </Grid>
                  <Grid item xl={3} spacing={2} >
                    <Icon>{<EmojiEventsOutlinedIcon />}</Icon>
                    <Link color='inherit'>Tournaments</Link>
                  </Grid>
                  <Grid item xl={3} spacing={5} >
                    <Icon>{<LeaderboardOutlinedIcon />}</Icon>
                    <Link color='inherit'>Leaderbords</Link>
                  </Grid>
                </Grid>
              </Grid>

            </Box>
          {/* </div > */}
          <Box sx={{ display: { xs: 'none', md: 'inline-block' } }}>
            <Button variant="contained" color="secondary" size="small"  >Connect wallet</Button>
            <Icon >{<LightModeOutlinedIcon />}</Icon>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}





{/* <Icon color="secondary"  sx={{mb:5, pr: 5, Spacing:5 }}>{<SportsEsportsOutlinedIcon />}</Icon>
          <Link color="secondary" underline='always' sx={{ mr: 4 }} >Play</Link>
          <Icon>{<EmojiEventsOutlinedIcon />}</Icon>
          <Link color="inherit" sx={{ mr: 4 }} >Tournaments</Link>
            <Icon>{<LeaderboardOutlinedIcon />}</Icon>
            <Link color="inherit" sx={{mr:10 }}>Leaderbords</Link>
        </Box>
        <Box sx={{ flexGrow: 0 ,display: { xs: 'none', md: 'flex' }}}> */}


















