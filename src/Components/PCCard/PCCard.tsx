import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { PCIBox, PCRCard, PCRCardContent, PCTTypography, TBox } from "./styled";

interface CardProps {
  image?: any;
  title?: string;
  subtitle?: string;
}

const PCCard = ({ image, title, subtitle }: CardProps) => {
  return (
    <PCRCard>
      <PCRCardContent>
        <PCIBox>
          <Image src={image} width={130} height={115} alt="" />
        </PCIBox>
        <TBox>
          <PCTTypography variant="h4"> {title}</PCTTypography>
          <Typography variant="body1">{subtitle}</Typography>
        </TBox>
      </PCRCardContent>
    </PCRCard>
  );
};

export default PCCard;
