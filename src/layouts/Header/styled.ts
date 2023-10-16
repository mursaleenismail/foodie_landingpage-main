 "use client";
 import {
    styled,
    Box,
    Card,
    Stack,
    Typography,
    Button,
    Tab,
    Grid,
    Toolbar,
  } from "@mui/material";
  import Image from "next/image";
  
  export const StyledToolbar = styled(Toolbar)(({}) => ({
   display:"flex",
   justifyContent:"space-between"
  }));

  export const MenuBox = styled(Box)(({theme}) => ({
  //  backgroundColor:"red",
   color:"black",
   alignItems:"center",
   display:"flex",
   justifyContent:"space-between",
   padding:" 0 30px",
   width:"32%",
   [theme.breakpoints.down("lg")]: {
    width:"55%"
  },

   [theme.breakpoints.down("sm")]: {
    width:"5%"
  },

   }));

   export const IconsBox = styled(Box)(({theme}) => ({
    
    display:"flex",
    alignItems:"center",
    gap:"28px",

    [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
  
    }));