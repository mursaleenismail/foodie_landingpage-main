import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  AvatarBox,
  AvatarStack,
  BodyTypograpghy,
  CFStack,
  CICardContent,
  CSAvatar,
  CookImage,
  ImageBox,
  OCTypograpghy,
  ReviewTypography,
  SImage,
  TSTypograpghy,
} from "./styled";
import CookerImage from "../../../../public/Customers/CookImage.png";
import Avatar01 from "../../../../public/Customers/Avatr01.png";
import Avatar02 from "../../../../public/Customers/Avatr02.png";
import Avatar03 from "../../../../public/Customers/Avatr03.png";
import Star from "../../../../public/Home-HeroIcons/fi-sr-star.svg";
import Image from "next/image";

const Customer = () => {
  return (
    <Box sx={{margin:"30px 0px"}}>
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Stack>
            <Card elevation={0}>
              <CICardContent>
                {" "}
                <ImageBox>
                  <CookImage
                    //   className="responsive-image"
                    src={CookerImage}
                    alt=""
                  />
                </ImageBox>
              </CICardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Stack>
            <Card elevation={0}>
              <CardContent sx={{ padding: "17% 0%", margin: "2% 5%" }}>
                <TSTypograpghy variant="h6">Testimonials</TSTypograpghy>
                <OCTypograpghy variant="h2">
                  What Our Customers <br /> Say About Us
                </OCTypograpghy>
                <BodyTypograpghy>
                  “I had the pleasure of dining at Foodi last night, and <br />
                  Im still raving about the experience! The attention to <br />
                  detail in presentation and service was impeccable”
                </BodyTypograpghy>

                <AvatarStack>
                  <AvatarBox>
                    <AvatarGroup max={4}>
                      <CSAvatar alt="Remy Sharp" src={Avatar01.src} />
                      <CSAvatar alt="Travis Howard" src={Avatar02.src} />
                      <CSAvatar alt="Cindy Baker" src={Avatar03.src} />
                    </AvatarGroup>
                  </AvatarBox>
                  <CFStack>
                    <Box>
                      <Typography variant="h5"> Customer Feedback</Typography>
                    </Box>
                    <Stack flexDirection="row">
                      <SImage src={Star} alt="" />
                      <Typography variant="h5">4.9</Typography>
                      <ReviewTypography variant="h6">
                        (18.6k Reviews)
                      </ReviewTypography>
                    </Stack>
                  </CFStack>
                </AvatarStack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customer;
