import {
  COMMON,
  elementryFont,
  normalFont,
  primaryFont,
} from "@/assets/theme/theme";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  styled,
  Box,
  Card,
  Stack,
  CardContent,
} from "@mui/material";
import Image from "next/image";

export const MCCard = styled(Card)(({}) => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.15)",
  borderRadius: "40px",
  margin: "4% 3%",
  textAlign: "center",
  position: "relative",
}));

export const MCCardContent = styled(CardContent)(({}) => ({
  padding: "10%  4% 5% 4%",
}));

export const HeartBox = styled(Box)(({}) => ({
  width: "87px",
  height: "75px",
  borderRadius: "0px 37.5px 0px 42.5px",
  backgroundColor: "#39DB4A",
  position: "absolute",
  top: "0",
  right: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ICNFavoriteBorder = styled(FavoriteBorder)(({}) => ({
  fontSize: "30px",
  color: "#FFFFFF",
}));

export const ICNFavorite = styled(Favorite)(({}) => ({
  fontSize: "30px",
  color: "#FFFFFF",
}));

export const MenuImage = styled(Image)(({}) => ({
  width: "277px",
  height: "277px",
}));
export const MTBox = styled(Box)(({}) => ({
  textAlign: "start",
  margin: "20px 5px",
  padding: "0px 12px",
}));

export const PRStack = styled(Stack)(({}) => ({
  padding: "0px 15px",
}));

export const DollarSpan = styled("span")(({}) => ({
  color: "#FF6868",
  fontSize: "24px",
}));

export const RatingBox = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "row",
}));

export const RatingImage = styled(Image)(({}) => ({
  margin: "8px 10px",
  width: "19px",
  height: "19px",
}));
