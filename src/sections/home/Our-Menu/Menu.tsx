"use client";
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { OMTypograpghy, SDTypograpghy } from './styled'
import Grid from '@mui/material/Grid';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import Salad1 from "../../../../public/Menu/Fattoush salad.svg";

const Menu = () => {
  return (
    <div>
      <Box>
        <Stack >
          <SDTypograpghy variant='h6'>Special Dishes</SDTypograpghy>
          <OMTypograpghy  variant='h2'>Standout Dishes <br/>From Our Menu</OMTypograpghy>
        </Stack>

        <Stack>
        <Grid container spacing={2} sx={{margin:"1% 0%"}}>
          <Grid item xl={3} lg={3} md={3} sm={6} xs={12}>
            <Card sx={{backgroundColor:"#FFFFFF" ,
            boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
            width:"450px",height:"525px",borderRadius:"40px",margin:"4% 0%"}}>
              <CardContent >
              
                  <Image src={Salad1} width={277} height={277} alt="" />
           
                <Box sx={{textAlign:"start"}}>
                <Typography variant="h4" >
                Fattoush salad
                </Typography>
                <Typography variant="subtitle1">
                Description of the item
                </Typography>
                </Box>
               <Stack direction="row">

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
