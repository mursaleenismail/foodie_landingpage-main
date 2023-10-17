import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'


interface CardProps {
    image?: any; 
    title?: string;
    subtitle?: string;
  }

const PCCard = ({image, title, subtitle}: CardProps) => {
    
  return (
    <Card
    sx={{
      backgroundColor: "#FFFFFF",
      boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
      width: "315px",
      height: "315px",
      borderRadius: "40px",
      margin: "4% 5%",
    }}
  >
    <CardContent sx={{ padding: "50px 75px" }}>
      <Box
        sx={{
          backgroundColor: "#C1F1C6",
          padding: "7%",
          borderRadius: "50%",
          width: "125px",
        }}
      >
        <Image src={image} width={130} height={115} alt="" />
      </Box>
      <Box sx={{ textAlign: "center",paddingTop:"20px" }}>
        <Typography variant="h4"> {title}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
      </Box>
    </CardContent>
  </Card>
  )
}

export default PCCard
