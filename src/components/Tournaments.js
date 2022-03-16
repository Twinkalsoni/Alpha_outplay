import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tournament from '../images/Tournament.png'
import Robot from '../images/Robot.png'
const Tournaments = () => {
  return (
    <>
      <Typography variant="h4" mt={3} mb={2} sx={{ flexGrow: 1 }}> Tournaments
        <Button variant='text' color='inherit' sx={{ float: 'right' }}>View All</Button>
      </Typography>
      <Stack direction="row" justifyContent="space-evenly" sx={{ flexWrap: "wrap" }}>
        <Card sx={{ maxWidth: 500, mb: 4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="300"
            image={Tournament}>
          </CardMedia>
          <Typography gutterBottom variant="h6" color="#fff" mt="1">
            Triska Reloaded
            <Button size="large" border-color="#fff" border="2" variant="outlined" sx={{ float: "right", color: "#fff", mt:1 }}>+  Join</Button>
          </Typography>
        </Card>

        <Card sx={{ maxWidth: 500, mb:4, backgroundColor: "#424242" }}>
          <CardMedia
            component="img"
            height="300"
            image={Robot}>
          </CardMedia>

          <Typography gutterBottom variant="h6" color="#fff" mt="1" >
            Robot Vacuum Wars
            <Button size="large" variant="outlined" sx={{ float:"right",color: "#fff", mt:1.5 }}>+  Join</Button>
          </Typography>
        </Card>
      </Stack>
    </>
  )
}

export default Tournaments