"use client"
import Box from '@mui/material/Box';
import React from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Burger from "../../../../public/Categories/pngwing 4.svg";
import Sandwitch from "../../../../public/Categories/pngwing 6.svg";
import IceCream from "../../../../public/Categories/pngwing 3.svg";
import Juice from "../../../../public/Categories/pngwing_7-.png";
import Image from "next/image";
import { CFTypograpghy, PCTypograpghy } from './styled';

const Categories = () => {
  return (
    <Box sx={{
      // backgroundColor:"#b9f6ca",
      padding:"0px 2%"}}>
      <Box>
       <CFTypograpghy variant='h6'>  Customer Favorites</CFTypograpghy>
        <PCTypograpghy variant="h2">Popular Categories</PCTypograpghy>
      </Box>
      <Stack>
        <Grid container spacing={2} sx={{margin:"1% 0%"}}>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Card sx={{backgroundColor:"#FFFFFF" ,
            boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.55)",
            width:"315px",height:"315px",borderRadius:"40px",margin:"4% 0%"}}>
              <CardContent sx={{padding:"50px 75px"}}>
                <Box sx={{ backgroundColor: "#C1F1C6",
                padding:"7%",
                 borderRadius: "50%" ,
                 width:"125px"}}>
                  <Image src={Burger} width={130} height={115} alt="" />
                </Box>
                <Box sx={{textAlign:"center"}}>
                <Typography variant="h4" >
                Main Dish
                </Typography>
                <Typography variant="h5">
                (86 dishes)
                </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Card sx={{backgroundColor:"#FFFFFF" ,
            boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.55)",
            width:"315px",height:"315px",borderRadius:"40px",margin:"4% 0%"}}>
              <CardContent sx={{padding:"50px 75px"}}>
                <Box sx={{ backgroundColor: "#C1F1C6",
                padding:"8%",
                 borderRadius: "52%" ,
                 width:"125px"}}>
                  <Image src={Sandwitch} width={115} height={95} alt="" />
                </Box>
                <Box sx={{textAlign:"center"}}>
                <Typography variant="h4" >
                Break Fast
                </Typography>
                <Typography variant="h5">
                (12 break fast)
                </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Card sx={{backgroundColor:"#FFFFFF" ,
            boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.55)",
            width:"315px",height:"315px",borderRadius:"40px",margin:"4% 0%"}}>
              <CardContent sx={{padding:"50px 75px"}}>
                <Box sx={{ backgroundColor: "#C1F1C6",
                padding:"7%",
                 borderRadius: "50%" ,
                 width:"125px"}}>
                  <Image src={IceCream} width={110} height={95} alt="" />
                </Box>
                <Box sx={{textAlign:"center"}}>
                <Typography variant="h4" >
                Dessert
                </Typography>
                <Typography variant="h5">
                (48 dessert)
                </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Card sx={{backgroundColor:"#FFFFFF" ,
            boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.55)",
            width:"315px",height:"315px",borderRadius:"40px",margin:"4% 0%" }}>
              <CardContent sx={{padding:"50px 75px"}}>
                <Box sx={{ backgroundColor: "#C1F1C6",
                padding:"7%",
                 borderRadius: "50%" ,
                 width:"125px"}}>
                  <Image  style={{paddingLeft:"15px"}}  src={Juice} width={87} height={95} alt="" />
                </Box>
                <Box sx={{textAlign:"center"}}>
                <Typography variant="h4" >
                Browse All
                </Typography>
                <Typography variant="h5">
                (255 Items)
                </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default Categories;
