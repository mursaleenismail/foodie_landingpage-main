import {
  COMMON,
  elementryFont,
  normalFont,
  primaryFont,
} from "@/assets/theme/theme";
import { styled, Stack, Typography, Button, Grid } from "@mui/material";

export const MSTack = styled(Stack)(({}) => ({
  padding: "0% 3%",
}));

export const MenuGrid = styled(Grid)(({}) => ({
  justifyContent: "center",
  alignItems: "center",
  margin: "1% 0%",
  padding: "0% 2%",
}));

export const SDTypograpghy = styled(Typography)(({}) => ({
  color: COMMON.secondary.lighter,
  marginTop: 30,
  fontFamily: primaryFont.style.fontFamily,
}));

export const OMTypograpghy = styled(Typography)(({}) => ({
  color: COMMON.common.black,
  marginBottom: 15,
  marginTop: 20,
  fontFamily: primaryFont.style.fontFamily,
}));
