import { styled, Box, Typography, Card, Stack } from "@mui/material";
import Image from "next/image";
import { theme } from "@/assets/theme/theme";

export const LeftCard = styled(Card)(({ theme }) => ({
  margin: "0 20px",
  [theme.breakpoints.down("xl")]: {
    padding: "18% 5%",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "2% 1%",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0% 0%",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "15% 11%",
  },
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#39DB4A",
  borderRadius: "50%",
  margin: "0 auto",
  position: "relative",
  [theme.breakpoints.up("xl")]: {
    width: "550px",
  },
  [theme.breakpoints.up("md")]: {
    width: "550px",
  },
  [theme.breakpoints.down("md")]: {
    width: "550px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "250px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "350px",
  },
  height: "550px",
  [theme.breakpoints.down("md")]: {
    height: "550px",
  },
  [theme.breakpoints.up("sm")]: {
    height: "550px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "350px",
  },
  
}));

export const MainImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  right: "1%",
  bottom: "13px",
}));

export const RenderFoodStack = styled(Stack)(({ theme }) => ({
  position: "absolute",
  // display:"none",

// WIDTH//
  [theme.breakpoints.up("sm")]: {
    width: "700px",
  },

  [theme.breakpoints.down("sm")]: {
    width: "420px",
  },

  //  ___LEFT////
  [theme.breakpoints.up("xl")]: {
    left: "55%",
  },
  [theme.breakpoints.up("sm")]: {
    left: "38%",
  },
  [theme.breakpoints.down("sm")]: {
    left: "0%",
  },


  //  TOP ///
  [theme.breakpoints.up("xl")]: {
    top: "62%",
  },
 
  [theme.breakpoints.down("lg")]: {
    top: "62%",
  },
  [theme.breakpoints.down("md")]: {
    top: "130%",
  },
  [theme.breakpoints.down("sm")]: {
    left: "38%",
  },
  

 
 
  
  // DIRECTION//
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  
}));

export const CBox1 = styled(Stack)(({ theme }) => ({
  backgroundColor: "white",
  boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.35)",
  padding: "15px",
  borderRadius: "25px",
  margin: "25px 10px 25px 15px",
}));

export const SNBox = styled(Box)(({ theme }) => ({
  marginLeft: "25px",
  marginRight: "10px",
  width: "125px",
}));

export const SNTypography = styled(Typography)(({ theme }) => ({
    marginBottom: "10px",
    fontSize: "19px",
    fontWeight: "850px",
  }));

