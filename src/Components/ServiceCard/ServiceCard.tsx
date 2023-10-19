import CardContent from "@mui/material/CardContent";
import React from "react";
import { ICNBox, ICNImage, SBTypography, SECard, TTypography,  TitleBox } from "../ServiceCrad/styled";


interface ServiceCardProps {
  image?: any;
  title?: string;
  subtitle?: string;
}

const ServiceCard = ({ image, title, subtitle }: ServiceCardProps) => {
  return (
    <SECard>
      <CardContent sx={{ padding: "50px 25px" }}>
        <ICNBox>
          <ICNImage src={image}  alt="" />
        </ICNBox>
        <TitleBox>
          <TTypography variant="h4">
            {" "}
            {title}
          </TTypography>
          <SBTypography variant="h6">
            {subtitle}
          </SBTypography>
        </TitleBox>
      </CardContent>
    </SECard>
  );
};

export default ServiceCard;
