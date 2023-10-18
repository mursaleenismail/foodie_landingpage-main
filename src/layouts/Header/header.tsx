"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { KeyboardArrowDown, Pets } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import {
  StyledToolbar,
  MenuBox,
  IconsBox,
  StyledAppbar,
  LIBox,
  LImage2,
  LImage1,
  StyledIconButton,
} from "./styled";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Icon1 from "../../../public/Home-HeroIcons/🦆 icon _search_.svg";
import Icon2 from "../../../public/Home-HeroIcons/fi-rr-shopping-bag.svg";
import Icon3 from "../../../public/Home-HeroIcons/fi-rr-phone-call.svg";
import Logo1 from "../../../public/Home-HeroIcons/F.svg";
import Logo2 from "../../../public/Home-HeroIcons/oodi.svg";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const Header = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [pagesArr, setPagesArr] = React.useState([
    {
      name: "Home",
    },
    {
      name: "Menu",
      icon: <KeyboardArrowDown sx={{ color: "#39DB4A" }} />,
    },
    {
      name: "Services",
      icon: <KeyboardArrowDown sx={{ color: "#39DB4A" }} />,
    },
    {
      name: "Offers",
    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        FOODI
      </Typography>
      <Divider />
      <List>
        {pagesArr.map((x, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    // <Container sx={{ padding: "30px 0" }}>
    <>
      <StyledAppbar>
        <StyledToolbar>
          <Stack direction="row">
            <LIBox>
              <LImage1 src={Logo1} alt="" />
            </LIBox>
            <LImage2 src={Logo2} alt="" />
          </Stack>

          <MenuBox>
            <StyledIconButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </StyledIconButton>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              {pagesArr.map((page, index) => (
                <Button
                  key={index}
                  sx={{
                    marginRight: "8px",
                    "&:hover": {
                      backgroundColor: "#b9f6ca",
                      fontSize: 14,
                    },
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 550,
                      color: "black",
                      marginRight: "4px",
                    }}
                  >
                    {page.name}
                  </span>
                  <span style={{ marginLeft: "4px", paddingTop: "10px" }}>
                    {page.icon}
                  </span>
                </Button>
              ))}
            </Box>
          </MenuBox>
          <IconsBox>
            <Image src={Icon1} width={33} height={33} alt="" />
            <Badge badgeContent={4} color="success">
              <Image src={Icon2} width={23} height={23} alt="" />
            </Badge>

            <Box
              sx={{
                bgcolor: "#39DB4A",
                padding: "10px 15px",
                borderRadius: "40px",
                display: "flex",
                gap: "15px",
              }}
            >
              <Image src={Icon3} width={23} height={23} alt="" />
              <Typography
                variant="h6"
                sx={{ color: "white", fontsize: "22px" }}
              >
                Contact
              </Typography>
            </Box>
          </IconsBox>
        </StyledToolbar>
      </StyledAppbar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
    // </Container>
  );
};

export default Header;
