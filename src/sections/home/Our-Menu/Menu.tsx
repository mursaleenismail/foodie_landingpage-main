"use client";
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { OMTypograpghy, SDTypograpghy } from './styled'
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import Star from "../../../../public/Home-HeroIcons/fi-sr-star.svg";
import Salad1 from "../../../../public/Menu/Fattoush salad.svg";
import Salad2 from "../../../../public/Menu/Vegetable salad.svg";
import Salad3 from "../../../../public/Menu/Egg salad.svg";


const Menu = () => {
  return (
    <div>
      <Box>
        <Stack >
          <SDTypograpghy variant='h6'>Special Dishes</SDTypograpghy>
          <OMTypograpghy  variant='h2'>Standout Dishes <br/>From Our Menu</OMTypograpghy>
        </Stack>

        <Stack>
        <Grid container spacing={0} sx={{margin:"1% 0%"}}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Card sx={{backgroundColor:"#FFFFFF" ,
            boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
            width:"450px",
            height:"485px",
            borderRadius:"40px",
            margin:"4% 0%",
            textAlign: "center", 
            }}>
              <CardContent sx={{padding:"8%"}}>
              {/* <Box sx={{justifyContent:"center"}}> */}
                  <Image  src={Salad1} width={277} height={277} alt="" />
                  {/* </Box> */}
           
                <Box sx={{    textAlign: "start", }} >
                <Typography variant="h4" >
                Fattoush salad
                </Typography>
                <Typography variant="subtitle1">
                Description of the item
                </Typography>
                </Box>
               <Stack direction="row" justifyContent="space-between">
                <Box>  <Typography variant="h5">
                  {" "}
                  <span style={{ color: "red", fontSize: "17px" }}>$</span>{" "}
                  18.00
                </Typography> </Box>
             <Box sx={{display:"flex",flexDirection:"row"}}>   <Image src={Star} width={19} height={19} alt="" />
                <Typography variant="h5">
                  {" "}
                  
                  4.9
                </Typography></Box>
               
               </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Card sx={{backgroundColor:"#FFFFFF" ,
            boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
            width:"450px",
            height:"485px",
            borderRadius:"40px",
            margin:"4% 0%",
            textAlign: "center", 
            }}>
              <CardContent sx={{padding:"8%"}}>
              {/* <Box sx={{justifyContent:"center"}}> */}
                  <Image  src={Salad2} width={277} height={277} alt="" />
                  {/* </Box> */}
           
                <Box sx={{    textAlign: "start", }} >
                <Typography variant="h4" >
                Vegetable salad
                </Typography>
                <Typography variant="subtitle1">
                Description of the item
                </Typography>
                </Box>
               <Stack direction="row" justifyContent="space-between">
                <Box>  <Typography variant="h5">
                  {" "}
                  <span style={{ color: "red", fontSize: "17px" }}>$</span>{" "}
                  26.00
                </Typography> </Box>
             <Box sx={{display:"flex",flexDirection:"row"}}>   <Image src={Star} width={19} height={19} alt="" />
                <Typography variant="h5">
                  {" "}
                  
                  4.6
                </Typography></Box>
               
               </Stack>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Card sx={{backgroundColor:"#FFFFFF" ,
            boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
            width:"450px",
            height:"485px",
            borderRadius:"40px",
            margin:"4% 0%",
            textAlign: "center", 
            }}>
              <CardContent sx={{padding:"8%"}}>
              {/* <Box sx={{justifyContent:"center"}}> */}
                  <Image  src={Salad3} width={277} height={277} alt="" />
                  {/* </Box> */}
           
                <Box sx={{    textAlign: "start", }} >
                <Typography variant="h4" >
                Egg vegi salad
                </Typography>
                <Typography variant="subtitle1">
                Description of the item
                </Typography>
                </Box>
               <Stack direction="row" justifyContent="space-between">
                <Box>  <Typography variant="h5">
                  {" "}
                  <span style={{ color: "red", fontSize: "17px" }}>$</span>{" "}
                  23.00
                </Typography> </Box>
             <Box sx={{display:"flex",flexDirection:"row"}}>   <Image src={Star} width={19} height={19} alt="" />
                <Typography variant="h5">
                  {" "}
                  
                  4.5
                </Typography></Box>
               
               </Stack>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
        </Stack>
      </Box>
    </div>
  )
}

export default Menu
