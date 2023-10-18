import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo1 from "../../../public/Home-HeroIcons/F.svg";
import Logo2 from "../../../public/Home-HeroIcons/oodi.svg";
import FBIcon from "../../../public/Footer/🦆 icon _facebook_.svg";
import InstaIcon from "../../../public/Footer/🦆 icon _instagram_.svg";
import TwitterIcon from "../../../public/Footer/🦆 icon _twitter_.svg";
import YoutubeIcon from "../../../public/Footer/🦆 icon _youtube_.svg";
import CRIcon from "../../../public/Footer/fi-rr-copyright.svg";
import {
  CopyRightStack,
  FBImage,
  FIStack,
  FLogoBox,
  IStack,
  InstaImage,
  LHTypography,
  LImage1,
  LImage2,
  LTypography,
  LiListItemButton,
  SMTypography,
  TwitterImage,
  YoutubeImage,
} from "./styled";
import Link from "next/link";

const Footer = () => {
  return (
    <Box>
      <Box>
        <Grid container spacing={0}>
          <Grid item xl={4} lg={5} md={5} sm={6} xs={12}>
            <Stack sx={{ padding: "4% 6%" }}>
              <Stack direction="row">
                <FLogoBox>
                  <LImage1 src={Logo1} alt="" />
                </FLogoBox>
                <LImage2 src={Logo2} alt="" />
              </Stack>
              <Box>
                <SMTypography variant="h6" sx={{ pt: "15px" }}>
                  Savor the artistry where <br /> every dish is a culinary{" "}
                  <br /> masterpiece
                </SMTypography>
              </Box>
            </Stack>
          </Grid>

          <Grid item xl={2} lg={2} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem
                  sx={{
                    ml: 2,
                  }}
                >
                  <LHTypography variant="h6"> Useful links</LHTypography>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">AboutUs</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Our Services</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">How it Works</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">
                      Become a Partner
                    </LTypography>
                  </LiListItemButton>
                </ListItem>
              </List>
            </Stack>
          </Grid>

          <Grid xl={2} lg={2} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem>
                  <LHTypography variant="h6">Community</LHTypography>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Token</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Discussion</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Voting</LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Blog</LTypography>
                  </LiListItemButton>
                  {/* <LiListItemButton>
                    <LTypography variant="subtitle1">Help Center</LTypography>
                  </LiListItemButton> */}
                </ListItem>
              </List>
            </Stack>
          </Grid>

          <Grid xl={2} lg={2} md={2} sm={6} xs={12}>
            <Stack>
              <List>
                <ListItem>
                  <LHTypography variant="h6">Contact Us</LHTypography>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">
                      example@email.com
                    </LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">
                      +64 958 248 966
                    </LTypography>
                  </LiListItemButton>
                </ListItem>
                <ListItem>
                  <LiListItemButton>
                    <LTypography variant="subtitle1">Social media</LTypography>
                  </LiListItemButton>
                </ListItem>
              </List>
            </Stack>
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Link href="#">
              <FIStack flex={1} direction="row">
                <FBImage src={FBIcon} alt="" />
                <InstaImage src={InstaIcon} alt="" />
                <TwitterImage src={TwitterIcon} alt="" />
                <YoutubeImage src={YoutubeIcon} alt="" />
              </FIStack>
            </Link>
          </Grid>

          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <CopyRightStack flex={4}>
              <Typography>
                Copyright <Image src={CRIcon} width={17} height={17} alt="" />{" "}
                2023 Dscode | All rights reserved
              </Typography>
            </CopyRightStack>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
            <Stack flex={1}></Stack>
          </Grid>
        </Grid>

        {/* </MainContainer> */}
      </Box>
    </Box>
  );
};

export default Footer;
