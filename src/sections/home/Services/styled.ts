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
  color: COMMON.elementry.light,
  fontSize: "28PX",
  marginTop: 30,
  marginBottom: 25,
  fontFamily: primaryFont.style.fontFamily,
}));

export const OCCard = styled(Card)(({}) => ({
  padding: "5% 2%",
}));

export const ExpButton = styled(Button)(({}) => ({
  margin: "20px 0px",
  borderRadius: "40px",
  width: "230px",
  fontSize: "22px",
  backgroundColor: COMMON.primary.main,
  boxShadow: "0px 7px 30px 0px rgba(188, 255, 154, 4.80)",
  textTransform: "none",
  "&:hover": {
    backgroundColor:COMMON.primary.hoverlight,
    boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.95)",
    color: "green",
  },
}));
