import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import React from 'react'

interface ServiceCardProps {
    image?: any; 
    title?: string;
    subtitle?: string;
  }


const ServiceCard  = ({image, title, subtitle}: ServiceCardProps) => {
    
    return (
      <Card
      sx={{
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
        width: "315px",
        height: "335px",
        borderRadius: "40px",
        margin: "2% 1%",
      }}
    >
      <CardContent sx={{ padding: "50px 25px" }}>
        <Box
          sx={{
            display: "flex",
      justifyContent: "center",
      alignItems: "center",
  
          }}
        >
          <Image src={image} width={68} height={68} alt="" />
        </Box>
        <Box sx={{ textAlign: "center",paddingTop:"20px" }}>
          <Typography sx={{color:"#5FE26C"}} variant="h4"> {title}</Typography>
          <Typography sx={{color:"#90BD95"}} variant="h6">{subtitle}</Typography>
        </Box>
      </CardContent>
    </Card>
    )
  }

export default ServiceCard
