import {
    COMMON,
    elementryFont,
    normalFont,
    primaryFont,
  } from "@/assets/theme/theme";
  import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
  
  export const CFTypograpghy = styled(Typography)(({}) => ({
    color: "#FF6868",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 30,
    fontFamily: primaryFont.style.fontFamily,
  }));
  

  export const PCTypograpghy = styled(Typography)(({}) => ({
    color: COMMON.common.black,
    textAlign: "center",
    marginBottom: 15,
    marginTop: 30,
    fontFamily: primaryFont.style.fontFamily,
  }));
  

//   export const Cards = styled(Card)(({}) => ({
//     height: 37 + "vh",
//     boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.05)",
//   }));
  
  export const MCard = styled(Card)(({}) => ({
    height: 37 + "vh",
    backgroundColor: COMMON.primary.light,
    boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.05)",
  }));
  
  export const CHTypography = styled(Typography)(({}) => ({
    fontFamily: elementryFont.style.fontFamily,
    marginTop: 24,
  }));