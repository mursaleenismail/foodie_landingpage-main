// import { COMMON, normalFont, primaryFont, theme } from "@/assets/theme/theme";
"use client";
import { COMMON, normalFont, primaryFont } from "@/assets/theme/theme";
import {
  Box,
  Stack,
  Typography,
  Button,
  Input,
  ListItemButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";


export const ParentBox = styled(Box)(({}) => ({
 backgroundColor: COMMON.primary.dark,
  padding: "3%",
}));

export const LiListItemButton = styled(ListItemButton)(({}) => ({
   color: COMMON.primary.light,
}));

export const LHTypography = styled(Typography)(({}) => ({
  fontFamily: primaryFont.style.fontFamily,
  color: COMMON.common.black,
}));

export const LTypography = styled(Typography)(({}) => ({
   fontFamily: normalFont.style.fontFamily,
   color: COMMON.elementry.light,
}));

export const SMTypography = styled(Typography)(({}) => ({
    color: COMMON.elementry.light,
   fontFamily: primaryFont.style.fontFamily,
  marginTop: "4px",
}));
export const IconStack = styled(Stack)(({}) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "20px",
}));

export const SBox = styled(Box)(({}) => ({
  marginRight: "25px",
}));

export const IStack = styled(Stack)(({}) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "25px",
}));




