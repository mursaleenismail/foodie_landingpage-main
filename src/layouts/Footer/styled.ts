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
import Image from "next/image";

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

export const FLogoBox = styled(Box)(({}) => ({
  bgcolor: "#39DB4A",
  // padding: "5% 0%",
  width: "35px",
  height: "35px",
  borderRadius: "8px",
}));

export const LImage2 = styled(Image)(({}) => ({
  paddingTop: "7px",
  width: "75px",
  height: "30p",
}));

export const LImage1 = styled(Image)(({}) => ({
  width: "30px",
  height: "33px",
}));

export const FIStack = styled(Stack)(({}) => ({
  margin: "5% 4%",
}));

export const FBImage = styled(Image)(({ theme }) => ({
  marginRight: "20px",
  transition: "background-color 0.3s ease, border-radius 0.3s ease",
  cursor: "pointer",
  width: "25px",
  height: "25px",
  "&:hover": {
    backgroundColor: "#39DB4A",
    borderRadius: "80px",
  },
}));

export const InstaImage = styled(Image)(({ theme }) => ({
  marginRight: "20px",
  position: "relative",
  width: "25px", 
  height: "25px",
  borderRadius: "100%",
  transition: "background-color 0.3s", 
  "&:hover": {
    backgroundColor: "#39DB4A",
  },

}));

export const TwitterImage = styled(Image)(({ theme }) => ({
  marginRight: "20px",
  position: "relative",
  width: "25px", 
  height: "25px",
  borderRadius: "100%",
  transition: "background-color 0.3s", 
  "&:hover": {
    backgroundColor: "#39DB4A",
  },

}));
export const YoutubeImage = styled(Image)(({ theme }) => ({
  marginRight: "20px",
  position: "relative",
  width: "25px", 
  height: "25px",
  borderRadius: "100%",
  transition: "background-color 0.3s", 
  "&:hover": {
    backgroundColor: "#39DB4A",
  },

}));


export const CopyRightStack = styled(Stack)(({ theme }) => ({
  margin: "5% 2%"
}));


