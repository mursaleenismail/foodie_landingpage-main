import {
    COMMON,
    elementryFont,
    normalFont,
    primaryFont,
  } from "@/assets/theme/theme";
  import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
  
  export const CFTypograpghy = styled(Typography)(({}) => ({
    color: COMMON.secondary.lighter,
    textAlign: "center",
    marginBottom: "2px",
    marginTop: "65px",
    fontFamily: primaryFont.style.fontFamily,
  }));

  export const PCTypograpghy = styled(Typography)(({}) => ({
    color: COMMON.common.black,
    textAlign: "center",
    marginBottom: "50px",
    marginTop: "30px",
    fontFamily: primaryFont.style.fontFamily,
  }));

