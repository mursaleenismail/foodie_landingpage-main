import {
    COMMON,
    elementryFont,
    normalFont,
    primaryFont,
  } from "@/assets/theme/theme";
  import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
  
  export const SDTypograpghy = styled(Typography)(({}) => ({
    color: "#FF6868",
    
  
    marginTop: 30,
    fontFamily: primaryFont.style.fontFamily,
  }));
  

  export const OMTypograpghy = styled(Typography)(({}) => ({
    color: COMMON.common.black,

    marginBottom: 15,
    marginTop: 20,
    fontFamily: primaryFont.style.fontFamily,
  }));