import {
  COMMON, primaryFont,
} from "@/assets/theme/theme";
import { styled, Box, Card, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";

export const SECard = styled(Card)(({}) => ({
  backgroundColor:COMMON.common.white,
  boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
  width: "315px",
  height: "335px",
  borderRadius: "40px",
  margin: "2% 1%",
}));

export const ICNBox = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ICNImage = styled(Image)(({}) => ({
    width:"68px",
    height:"68px"
  }));

  export const TitleBox = styled(Box)(({}) => ({
    fontFamily: primaryFont.style.fontFamily,
    textAlign: "center",
     paddingTop: "20px" 
  }));
 

  export const TTypography = styled(Typography)(({}) => ({
    fontFamily: primaryFont.style.fontFamily,
    color: COMMON.primary.lighter,
  }));
 

  export const SBTypography = styled(Typography)(({}) => ({
    fontFamily: primaryFont.style.fontFamily,
    color: COMMON.primary.dark,
  }));
 

