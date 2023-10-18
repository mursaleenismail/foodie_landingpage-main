"use client";
import {
  styled,
  Box,
  Typography,
  Stack,
  CardContent,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import { COMMON, primaryFont, theme } from "@/assets/theme/theme";

export const ImageBox = styled(Box)(({ theme }) => ({
  backgroundColor: COMMON.primary.main,
  borderRadius: "140px 140px 41px 41px;",
  margin: "0 auto",
  position: "relative",

  [theme.breakpoints.up("md")]: {
    width: "500px",
  },

  [theme.breakpoints.up("sm")]: {
    width: "520px",
  },

  height: "360px",
  [theme.breakpoints.down("md")]: {
    height: "465px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "365px",
  },
}));

export const CookImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  right: "1%",
  bottom: "2px",
  width: "505px",
  height: "670px",
}));

export const CICardContent = styled(CardContent)(({ theme }) => ({
  padding: "45% 0% 0% 0%",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const TSTypograpghy = styled(Typography)(({}) => ({
  color: COMMON.secondary.lighter,
  marginTop: 30,
  fontFamily: primaryFont.style.fontFamily,
}));
export const OCTypograpghy = styled(Typography)(({}) => ({
  color: COMMON.common.black,
  marginBottom: 15,
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

export const AvatarStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const AvatarBox = styled(Box)(({}) => ({
  textAlign: "start",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  margin: "5% 0%",
}));
export const CSAvatar = styled(Avatar)(({}) => ({
  width: 60,
  height: 60,
}));
export const CFStack = styled(Stack)(({}) => ({
  padding: "5% 0%",
  margin: "0% 2%",
}));
export const SImage = styled(Image)(({}) => ({
  margin: "8px 10px",
  width: "19px",
  height: "19px",
}));
export const ReviewTypography = styled(Typography)(({}) => ({
  margin: "5px 15px",
}));
