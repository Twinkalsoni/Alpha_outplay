import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import first from '../images/first.png'
import second from '../images/second.png'
import third from '../images/third.png'
import forth from '../images/forth.png'
import fifth from '../images/fifth.png'
import six from '../images/six.png'
import seven from '../images/seven.png'
import eight from '../images/eight.png'
import Stack from '@mui/material/Stack';

export default function imglist() {
  return (
    <>
      <Typography variant="h4" mb={2} sx={{ flexGrow: 1 }}>   Games
        <Button variant='text' color='inherit' sx={{ float: 'right' }}>View All</Button>
      </Typography>
      <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
        <Card sx={{ maxWidth: 300, mb: 4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="250"
            image={first}>
          </CardMedia>

          <Typography gutterBottom variant="h6" color="#fff" >
            Arcadeum Arena
            <Button size="large" variant="outlined" sx={{ float: "right", color: "#fff" }}>Play</Button>
          </Typography>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >Arcadians</Button>
        </Card>


        <Card sx={{ maxWidth: 300, mb: 4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="250"
            image={second}>
          </CardMedia>
          <Typography gutterBottom variant="h6" color="#fff" >
            Robot Vacuum Wars
            <Button size="large" variant="outlined" sx={{ float: "right", color: "#fff" }}>Play</Button>
          </Typography>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >Action</Button>
        </Card>

        <Card sx={{ maxWidth: 300, mb: 4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="250"
            image={third}>
          </CardMedia>
          <Typography gutterBottom variant="h6" color="#fff">
            Triska Reloaded
            <Button size="large" variant="outlined" sx={{ float: "right", color: "#fff" }}>Play</Button>
          </Typography>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >Animals</Button>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >cute</Button>

        </Card>

        <Card sx={{ maxWidth: 330, mb: 4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="250"
            image={forth}>
          </CardMedia>
          <Typography gutterBottom variant="h6" mt="3" color="#fff">
            Forest Cuties
            <Button size="large" variant="outlined" backgroundcolor='#fff' sx={{ float: "right", color: "#fff" }}>Play</Button>
          </Typography>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >Animals</Button>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >cute</Button>
          {/* <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%' }} >EnclaveGames</Button> */}
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >memory</Button>

        </Card>


        <Card sx={{ maxWidth: 300,mb:4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="250"
            image={fifth}>
          </CardMedia>
          <Typography gutterBottom variant="h6" mt="3" color="#fff">
            Classic snake game
            <Button size="large" variant="outlined" backgroundcolor='#fff' sx={{ float: "right", color: "#fff" }}>Play</Button>
          </Typography>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >Easy</Button>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >Fun</Button>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#fff" }} >Casual</Button>

        </Card>

        <Card sx={{ maxWidth: 300,mb:4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="250"
            image={six}>
          </CardMedia>
          <Typography gutterBottom variant="h6" mt="3" color="#fff">
            Proxx
            <Button size="large" variant="outlined" backgroundcolor='#fff' sx={{ float: "right", color: "#f1f1f1" }}>Play</Button>
          </Typography>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#f1f1f1" }} >preact</Button>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#f1f1f1" }} >Time-Based</Button>

        </Card>

        <Card sx={{ maxWidth: 300,mb:4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="250"
            image={seven}>
          </CardMedia>
          <Typography gutterBottom variant="h6" mt="3" color="#f1f1f1" >
            Stolen Sword
            <Button size="large" variant="outlined" backgroundcolor='#fff' sx={{ float: "right", color: "#f1f1f1" }}>Play</Button>
          </Typography>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#f1f1f1" }} >Action</Button>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#f1f1f1" }} >Casual</Button>
        </Card>

        <Card sx={{ maxWidth: 300,mb:4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="250"
            image={eight}>
          </CardMedia>
          <Typography gutterBottom variant="h6" mt="3" color="#f1f1f1">
            Connection
            <Button size="large" variant="outlined" backgroundcolor='#fff' sx={{ float:"right", color: "#f1f1f1" }}>Play</Button>
          </Typography>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#f1f1f1" }} >Action</Button>
          <Button gutterBottom size="small" variant="outlined" sx={{ borderRadius: '30%', color: "#f1f1f1" }} >Puzzle</Button>
        </Card>

      </Stack>




    </>
  );
}