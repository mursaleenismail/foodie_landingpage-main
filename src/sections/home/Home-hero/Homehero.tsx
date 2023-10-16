"use client";
import React from "react";
import HeroImage from "../../../../public/Home-HeroIcons/HomeHeroPic.png";
import CardImage from "../../../../public/Home-HeroIcons/image 13 (1).png";
import CardImage1 from "../../../../public/Home-HeroIcons/image 14 (1).png";
import VideoImg from "../../../../public/Home-HeroIcons/Polygon 1.svg";
import Star from "../../../../public/Home-HeroIcons/fi-sr-star.svg";
import EmptyStar from "../../../../public/Home-HeroIcons/fi-br-star.svg";
import Image from "next/image";
import {
  Grid,
  CardContent,
  Button,
  Typography,
  Box,
  Stack,
  Card,
} from "@mui/material";
import { CBox1, ImageBox, LeftCard, MainImage, SNBox, SNTypography, TransparentBox } from "./styled";
import { MyContainer } from "../MyContainer/styled";

const HomeHero = () => {
  return (
    // <MyContainer>
    <Grid container>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <LeftCard elevation={0}>
          <CardContent>
            <Typography sx={{ fontWeight: "850px" }} variant="h2">
              Dive into Delights <br /> Of Delectable{" "}
              <span style={{ color: "#39DB4A" }}> Food</span>
            </Typography>
            <Typography variant="h6" sx={{ margin: "25px 0" }}>
              Where Each Plate Weaves a Story of Culinary <br /> Mastery and
              Passionate Craftsmanship
            </Typography>
            <Stack
              direction={{ md: "row", xs: "column" }}
              justifySelf="space-between"
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  margin: "20px 0px",
                  borderRadius: "40px",
                  width: "230px",
                  fontSize: "22px",
                  // height:"80px",
                  backgroundColor: "#39DB4A",
                  boxShadow: "0px 7px 30px 0px rgba(188, 255, 154, 4.80)",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#C1F1C6;",
                    boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.45)",
                    color: "green",
                  },
                }}
              >
                Order Now
              </Button>
              <Typography
                sx={{ margin: "30px 50px", fontSize: "26px", fontWeight: 600 }}
              >
                Watch Video
              </Typography>
              <Box
                sx={{
                  backgroundColor: "white",
                  boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.45)",
                  width: "40px",
                  height: "40px",
                  p: 2,
                  borderRadius: "50px",
                }}
              >
                <Image src={VideoImg} width={40} height={40} alt="" />
              </Box>
            </Stack>
          </CardContent>
        </LeftCard>
      </Grid>

      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
        <CardContent>
          <ImageBox>
            <MainImage
              className="responsive-image"
              src={HeroImage}
              width={625}
              height={615}
              alt=""
            />
          </ImageBox>
          <TransparentBox>
            <CBox1 >
              <Box>
                <Image src={CardImage1} width={120} height={110} alt="" />
              </Box>
              <SNBox>
                <SNTypography>
                  Spicy noodles
                </SNTypography>
                <Stack
                  direction="row"
                  justifyContent="space between"
                  sx={{ marginBottom: "10px" }}
                >
                  <Image src={Star} width={16} height={16} alt="" />
                  <Image src={Star} width={16} height={16} alt="" />
                  <Image src={Star} width={16} height={16} alt="" />
                  <Image src={Star} width={16} height={16} alt="" />
                  <Image src={EmptyStar} width={16} height={16} alt="" />
                </Stack>
                <Typography variant="h6">
                  {" "}
                  <span style={{ color: "red", fontSize: "16px" }}>$</span>{" "}
                  18.00
                </Typography>
              </SNBox>
            </CBox1>

            <CBox1 >
              <Box>
                <Image src={CardImage} width={120} height={110} alt="" />
              </Box>

              <SNBox
                sx={{ marginLeft: "25px", marginRight: "19px", width: "145px" }}
              >
                <SNTypography
                  sx={{
                    marginBottom: "10px",
                    fontSize: "19px",
                    fontWeight: "850px",
                    paddingRight: "-10px",
                  }}
                >
                  Vegetarian salad
                </SNTypography>
                <Stack
                  direction="row"
                  justifyContent="space between"
                  sx={{ marginBottom: "10px" }}
                >
                  <Image src={Star} width={16} height={16} alt="" />
                  <Image src={Star} width={16} height={16} alt="" />
                  <Image src={Star} width={16} height={16} alt="" />
                  <Image src={Star} width={16} height={16} alt="" />
                  <Image src={EmptyStar} width={16} height={16} alt="" />
                </Stack>
                <Typography variant="h6">
                  {" "}
                  <span style={{ color: "red", fontSize: "16px" }}>$</span>{" "}
                  23.00
                </Typography>
              </SNBox>
            </CBox1>
          </TransparentBox>
        </CardContent>
      </Grid>
    </Grid>
    // </MyContainer>
  );
};

export default HomeHero;
