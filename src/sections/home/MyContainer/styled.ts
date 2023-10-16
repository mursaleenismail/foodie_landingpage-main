import { styled, Box, Stack } from "@mui/material";

export const MyContainer = styled(Stack)(({theme}) => ({
  width: "100%",
  padding:"100px 150px",
  [theme.breakpoints.down("xl")]: {
    padding:"100px 150px",
  },
  [theme.breakpoints.down("lg")]: {
    padding:"100px 150px",
  },
  [theme.breakpoints.down("md")]: {
    padding:"100px 150px",
  },
  [theme.breakpoints.down("sm")]: {
    padding:"0px 0px",
  },

}));

export const FooterContainer = styled(Box)(({}) => ({

  width: "100%",

}));
