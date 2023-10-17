"use client";
import { styled, Box, Typography, Card, Stack } from "@mui/material";
import Image from "next/image";
import { COMMON, primaryFont, theme } from "@/assets/theme/theme";

export const ImageBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#39DB4A",
  borderRadius: "140px 140px 41px 41px;",
  margin: "0 auto",
  position: "relative",
  [theme.breakpoints.up("xl")]: {
    width: "500px",
  },
  [theme.breakpoints.up("md")]: {
    width: "500px",
  },
  [theme.breakpoints.down("md")]: {
    width: "470px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "400px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "400px",
  },
  height: "550px",
  [theme.breakpoints.down("md")]: {
    height: "365px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "365px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "365px",
  },
}));

export const CookImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  right: "1%",
  bottom: "13px",
}));

export const TSTypograpghy = styled(Typography)(({}) => ({
    color: "#FF6868",
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
    color: "##555555",
    fontSize:"28PX",
    marginTop: 30,
    marginBottom: 25,
    fontFamily: primaryFont.style.fontFamily,
  }));