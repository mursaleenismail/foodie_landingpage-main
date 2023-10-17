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
  BodyTypograpghy,
  CookImage,
  ImageBox,
  OCTypograpghy,
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
    <Box>
      <Grid container spacing={1} sx={{ flexGrow: 1 }}>
        <Grid item xl={6} lg={6} md={5} sm={6} xs={12}>
          <Stack>
            <Card elevation={0}>
              <CardContent sx={{ padding: "45% 0%",display:{sm:"block" ,xs:"none"} }}>
                <ImageBox>
                  <CookImage
                    //   className="responsive-image"
                    src={CookerImage}
                    width={506}
                    height={744}
                    alt=""
                  />
                </ImageBox>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        <Grid item xl={6} lg={6} md={7} sm={6} xs={12}>
          <Stack>
            <Card elevation={0}>
              <CardContent sx={{ padding: "17% 0%",margin:"2% 5%" }}>
                <TSTypograpghy variant="h6">Testimonials</TSTypograpghy>
                <OCTypograpghy variant="h2">
                  What Our Customers <br /> Say About Us
                </OCTypograpghy>
                <BodyTypograpghy>
                  “I had the pleasure of dining at Foodi last night, and <br />
                  Im still raving about the experience! The attention to <br />
                  detail in presentation and service was impeccable”
                </BodyTypograpghy>

                <Stack direction="row">
                  <Box>
                    <AvatarGroup max={4}>
                      <Avatar
                        alt="Remy Sharp"
                        src={Avatar01.src}
                        sx={{ width: 60, height: 60 }}
                      />
                      <Avatar
                        alt="Travis Howard"
                        src={Avatar02.src}
                        sx={{ width: 60, height: 60 }}
                      />
                      <Avatar
                        alt="Cindy Baker"
                        src={Avatar03.src}
                        sx={{ width: 60, height: 60 }}
                      />
                    </AvatarGroup>
                  </Box>
                  <Stack direction={} bgcolor="red" sx={{ margin: "0% 2%" ,
                  }}>
                    <Box>
                      <Typography variant="h5"> Customer Feedback</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Image
                        style={{ margin: "8px 10px" }}
                        src={Star}
                        width={19}
                        height={19}
                        alt=""
                      />
                      <Typography variant="h5">4.9</Typography>
                      <Typography sx={{ margin: "5px 15px" }} variant="h6">
                        (18.6k Reviews)
                      </Typography>
                    </Box>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customer;
