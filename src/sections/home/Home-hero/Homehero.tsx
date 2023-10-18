"use client";
import React from "react";
import HeroImage from "../../../../public/Home-HeroIcons/HomeHeroPic.png";
import CardImage from "../../../../public/Home-HeroIcons/image 13 (1).png";
import CardImage1 from "../../../../public/Home-HeroIcons/image 14 (1).png";
import VideoImg from "../../../../public/Home-HeroIcons/Polygon 1.svg";
import Image from "next/image";
import {
  Grid,
  CardContent,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import {
  CBox1,
  ImageBox,
  LeftCard,
  MainImage,
  RenderFoodStack,
} from "./styled";
import { MyContainer } from "../MyContainer/styled";
import RenderFoodCard from "@/Components/RenderFoodCard/RenderFoodCard";

const HomeHero = () => {
  return (
    <Box sx={{ padding: "5% 1%" }}>
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
                      boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.95)",
                      color: "green",
                    },
                  }}
                >
                  Order Now
                </Button>
                <Typography
                  sx={{
                    margin: "30px 50px",
                    fontSize: "26px",
                    fontWeight: 600,
                  }}
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
          <ImageBox>
            <MainImage
              className="responsive-image"
              src={HeroImage}
              width={625}
              height={615}
              alt=""
            />
          </ImageBox>

          <RenderFoodStack  direction="column" 
            // sx={{display:{sm:"block",xs:"none"}}}
            >
            <RenderFoodCard
          
              image={CardImage}
              title="Spicy noodles"
              price={18.0}
            />
            <RenderFoodCard
              image={CardImage1}
              title="Vegetarian salad"
              price={23.0}
            />
          </RenderFoodStack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeHero;
