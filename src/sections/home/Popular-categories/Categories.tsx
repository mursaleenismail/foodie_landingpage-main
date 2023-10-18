"use client";
import Box from "@mui/material/Box";
import React from "react";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Burger from "../../../../public/Categories/pngwing 4.svg";
import Sandwitch from "../../../../public/Categories/pngwing 6.svg";
import IceCream from "../../../../public/Categories/pngwing 3.svg";
import Juice from "../../../../public/Categories/pngwing_7-.png";
import Image from "next/image";
import { CFTypograpghy, PCTypograpghy } from "./styled";
import PCCard from "@/Components/PCCard/PCCard";

const Categories = () => {
  return (
    <Box
      sx={{
      margin:"10px 20px" ,
        padding:"0px",
      }}
    >
      <Box>
        <CFTypograpghy variant="h6"> Customer Favorites</CFTypograpghy>
        <PCTypograpghy variant="h2">Popular Categories</PCTypograpghy>
      </Box>
      <Stack>
        <Grid
          container
          spacing={2}
          gap={15}
          sx={{ 
             justifyContent: "center",
          alignItems: "center",
        }}
  
        >
          <Grid xl={2} lg={3} md={3} sm={6} xs={12}>
            <PCCard image={Burger} title="Main Dish" subtitle="(86 dishes)" />
          </Grid>

          <Grid xl={2}  lg={3} md={3} sm={6} xs={12}>
          <PCCard image={Sandwitch} title="Break Fast" subtitle="(12 break fast)" />
          </Grid>

          <Grid xl={2}  lg={3} md={3} sm={6} xs={12}>
          <PCCard image={IceCream} title="Dessert" subtitle="(48 dessert)" />
          </Grid>

          <Grid xl={2} lg={3} md={3} sm={6} xs={12}>
          <PCCard image={Juice} title="Browse All" subtitle="(255 Items)" />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Categories;
