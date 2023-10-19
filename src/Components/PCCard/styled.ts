import {
  COMMON,
  elementryFont,
  normalFont,
  primaryFont,
} from "@/assets/theme/theme";
import {
  styled,
  Box,
  Card,
  Stack,
  Typography,
  Button,
  CardContent,
} from "@mui/material";

export const PCRCard = styled(Card)(({}) => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
  width: "315px",
  height: "315px",
  borderRadius: "40px",
  marginLeft:"5%"
  // margin: "4% 5%",
}));

export const PCRCardContent = styled(CardContent)(({}) => ({
  padding: "50px 75px",
}));

export const PCIBox = styled(Box)(({}) => ({
  backgroundColor: "#C1F1C6",
  padding: "7%",
  borderRadius: "50%",
  width: "125px",
}));

export const TBox = styled(Box)(({}) => ({
  textAlign: "center",
  paddingTop: "20px",
}));

export const PCTTypography = styled(Typography)(({}) => ({
  fontFamily: primaryFont.style.fontFamily,
}));

export const PCSTypography = styled(Typography)(({}) => ({
  fontFamily: primaryFont.style.fontFamily,
  color: COMMON.elementry.light,
}));
