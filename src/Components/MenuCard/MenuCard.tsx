import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Box, Card, CardContent, Checkbox, IconButton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Star from "../../../public/Home-HeroIcons/fi-sr-star.svg";
import React from 'react'

interface MenuCardProps {
    image?: any; 
    title?: string;
    subtitle?: string;
    price?:number;
    rating?:number;
  }

const MenuCard = ({image, title, subtitle,price,rating}: MenuCardProps) => {
  return (
    <Card sx={{backgroundColor:"#FFFFFF" ,
    boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
    borderRadius:"40px",
    margin:"4% 3%",
    textAlign: "center", 
    position: "relative",
    }}>
      <CardContent sx={{padding:"10%  4% 5% 4%"  }}>
        <Box sx={{width:"87px",
        height:"75px",
        borderRadius: "0px 37.5px 0px 42.5px",
        backgroundColor:"#39DB4A", 
         position: "absolute",
         top: "0",  
         right: "0",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         }}>
       <IconButton aria-label="add to favorites">
      <Checkbox
        icon={<FavoriteBorder sx={{ fontSize:"30px",color:"#FFFFFF" }}  />}
        checkedIcon={<Favorite sx={{ fontSize:"30px",color:"#FFFFFF" }} />}
      />
    </IconButton>
        </Box>

          <Image  src={image} width={277} height={277} alt="" />
        
   
        <Box sx={{    textAlign: "start",margin:"20px 5px" ,padding:"0px 12px"}} >
        <Typography variant="h4" >
       {title}
        </Typography>
        <Typography variant="subtitle1">
       {subtitle}
        </Typography>
        </Box>
       <Stack direction="row" justifyContent="space-between" sx={{padding:"0px 15px"}}>
        <Box>  <Typography variant="h4">
          {" "}
          <span style={{ color: "red", fontSize: "24px" }}>$</span>{" "}
          {price}.00
        </Typography> </Box>
     <Box sx={{display:"flex",flexDirection:"row"}}>   <Image style={{margin:"8px 10px"}} src={Star} width={19} height={19} alt="" />
        <Typography   variant="h5">
          {" "}
          
      {rating}
        </Typography></Box>
       
       </Stack>
      </CardContent>
    </Card>
  )
}

export default MenuCard
