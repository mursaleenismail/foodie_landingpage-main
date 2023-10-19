"use client";
import { Box, Checkbox, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { MSTack, MenuGrid, OMTypograpghy, SDTypograpghy } from "./styled";
import Grid from "@mui/material/Grid";
import Salad1 from "../../../../public/Menu/Fattoush salad.svg";
import Salad2 from "../../../../public/Menu/Vegetable salad.svg";
import Salad3 from "../../../../public/Menu/Egg salad.svg";
import MenuCard from "@/Components/MenuCard/MenuCard";

const Menu = () => {
  return (
    <div>
      <Box>
        <MSTack>
          <SDTypograpghy variant="h6">Special Dishes</SDTypograpghy>
          <OMTypograpghy variant="h2">
            Standout Dishes <br />
            From Our Menu
          </OMTypograpghy>
        </MSTack>

        <Stack>
          <MenuGrid container spacing={0}>
            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <MenuCard
                image={Salad1}
                title="Fattoush salad"
                subtitle="Description of the item"
                price={24}
                rating={4.9}
              />
            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <MenuCard
                image={Salad2}
                title="Vegetable salad"
                subtitle="Description of the item"
                price={26}
                rating={4.6}
              />
            </Grid>

            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
              <MenuCard
                image={Salad3}
                title="Egg vegi salad"
                subtitle="Description of the item"
                price={23}
                rating={4.5}
              />
            </Grid>
          </MenuGrid>
        </Stack>
      </Box>
    </div>
  );
};

export default Menu;
