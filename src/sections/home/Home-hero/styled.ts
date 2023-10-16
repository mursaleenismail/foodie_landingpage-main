import { styled, Box, Typography, Card } from "@mui/material";
import Image from "next/image";
import { theme } from "@/assets/theme/theme";

export const LeftCard = styled(Card)(({ theme }) => ({
  margin: "0 20px",
  // padding: "12%",
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
    width: "550px",
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

export const TransparentBox = styled(Box)(({ theme }) => ({
  backgroundColor: "yellow",
  display: "flex",
  //     flexDirection:{md:"row",xs:"column"},

//   [theme.breakpoints.up("sm")]: {
//     flexDirection: "row ",
//   },
  [theme.breakpoints.down('md')]: {
    // flexDirection: "column",
    backgroundColor: "pink !important",
  },
  //   justifySelf: "center",

  //     width:{xl:"680px",lg:"680px",md:"670px",sm:"420px",xs:"340px"},
  // [theme.breakpoints.up("xl")]: {
  //    width:"620px"
  //   },
  //   [theme.breakpoints.up("lg")]: {
  //     width:"680px"
  //    },
  //    [theme.breakpoints.down("md")]: {
  //     width:"420px"
  //    },

  //     margin:{xs:"0 10px"},
  [theme.breakpoints.up("sm")]: {
    width: "690px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "420px",
  },
  position: "absolute",
  //   top:{xl:"620px",lg:"615px",md:"610px",sm:"1170px",xs:"1215px"},
  [theme.breakpoints.up("lg")]: {
    top: "620px",
  },
  [theme.breakpoints.down("md")]: {
    top: "1025px",
  },
//   [theme.breakpoints.down("sm")]: {
//     top: "1130px",
//   },
  //   left:{ xl:"50%",lg:"47%",md:"41%" ,sm:"14%",xs:"4%"}

  [theme.breakpoints.up("xl")]: {
    left: "55%",
  },

  [theme.breakpoints.down("xl")]: {
    left: "44%",
  },
  [theme.breakpoints.down("sm")]: {
    left: "0%",
  },
  [theme.breakpoints.down("xs")]: {
    left: "0%",
  },
}));

export const CBox1 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
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

