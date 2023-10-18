"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import Icon1 from "../../../../public/Services/fi-rr-salad.svg";
import Icon2 from "../../../../public/Services/fi-rr-time-fast.svg";
import Icon3 from "../../../../public/Services/fi-rr-shopping-cart-check.svg";
import Icon4 from "../../../../public/Services/fi-rr-gift.svg";
import ServiceCard from "@/Components/ServiceCrad/ServiceCard";
import {
  BodyTypograpghy,
  ExpButton,
  HeadingTypograpghy,
  OCCard,
  OSTypograpghy,
} from "./styled";


const Services = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={0}>
          <Grid item xl={6} lg={6} md={5} sm={6} xs={12}>
            <OCCard elevation={0}>
              <CardContent>
                <OSTypograpghy variant="h6">Our Story & Services</OSTypograpghy>

                <HeadingTypograpghy variant="h2">
                  Our Culinary Journey <br /> And Services
                </HeadingTypograpghy>
                <BodyTypograpghy>
                  Rooted in passion, we curate unforgettable dining <br />{" "}
                  experiences and offer exceptional services, <br /> blending
                  culinary artistry with warm hospitality.
                </BodyTypograpghy>
                <ExpButton variant="contained" size="large">
                  Explore
                </ExpButton>
              </CardContent>
            </OCCard>
          </Grid>
          <Grid item xl={6} lg={6} md={7} sm={6} xs={12}> 
            <Stack>
              <Stack direction="row">
                <ServiceCard
                  image={Icon1}
                  title="Catering"
                  subtitle="Delight your guests with our flavors and  presentation"
                />
                <ServiceCard
                  image={Icon2}
                  title="Fast delivery"
                  subtitle="We deliver your order promptly to your door"
                />
              </Stack>

              <Stack direction="row">
                <ServiceCard
                  image={Icon3}
                  title="Online Ordering"
                  subtitle="Explore menu & order with ease using our Online Ordering "
                />
                <ServiceCard
                  image={Icon4}
                  title="Gift Cards"
                  subtitle="Give the gift of exceptional dining with Foodi Gift Cards "
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
