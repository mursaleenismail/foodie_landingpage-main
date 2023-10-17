import {
    COMMON,
    elementryFont,
    normalFont,
    primaryFont,
  } from "@/assets/theme/theme";
  import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
  
  export const OSTypograpghy = styled(Typography)(({}) => ({
    color: "#FF6868",
    marginTop: 30,
    fontFamily: primaryFont.style.fontFamily,
  }));
  

  export const HeadingTypograpghy = styled(Typography)(({}) => ({
    color: COMMON.common.black,

    marginBottom: 25,
    marginTop: 20,
    fontFamily: primaryFont.style.fontFamily,
  }));

  export const BodyTypograpghy = styled(Typography)(({}) => ({
    color: "##555555",
    fontSize:"28PX",
    marginTop: 30,
    marginBottom: 25,
    fontFamily: primaryFont.style.fontFamily,
  }));
  