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
import { BodyTypograpghy, HeadingTypograpghy, OSTypograpghy } from "./styled";
import Button from "@mui/material/Button";

const Services = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={0}>
          <Grid item xl={6} lg={6} md={5} sm={6} xs={12}>
            <Card  elevation={0} sx={{ padding: "7% 5%" }}>
              <CardContent>
                <OSTypograpghy variant="h6">Our Story & Services</OSTypograpghy>

                <HeadingTypograpghy variant="h2">
                  Our Culinary Journey <br /> And Services
                </HeadingTypograpghy>
                <BodyTypograpghy>
                  Rooted in passion, we curate unforgettable dining <br/> experiences
                  and offer exceptional services, <br/> blending culinary artistry
                  with warm hospitality.
                </BodyTypograpghy>
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
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xl={6} lg={6} md={7} sm={6} xs={12}>
            {/* <Stack> */}
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
