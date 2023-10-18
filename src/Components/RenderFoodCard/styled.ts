import { styled, Box, Typography, Card, Stack } from "@mui/material";
import Image from "next/image";
import { COMMON, theme } from "@/assets/theme/theme";

export const CBStack = styled(Stack)(({theme}) => ({
    backgroundColor:COMMON.common.white,
    boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.35)",
    padding: "15px",
    borderRadius: "25px",
    margin: "25px 10px 25px 15px",
  }));
  
  export const SNStack = styled(Stack)(({ theme }) => ({
    marginLeft: "25px",
    marginRight: "10px",
    width: "155px",
  }));
  
  export const TitleTypography = styled(Typography)(({ theme }) => ({
      marginBottom: "10px",
      fontWeight: "850px",
    }));
  