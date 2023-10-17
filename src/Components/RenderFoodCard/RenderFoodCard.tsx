
import { Box, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import StarIcon from "../../sections/home/StarIcon/StarIcon";
import { CBStack, SNStack, TitleTypography } from "./styled";

interface RFCardProps {
  image?: any; 
  title?: string;
  price?: number;
}
const RenderFoodCard =  ( {image,title,price}:RFCardProps) => {
  return (
      <CBStack direction="row">
        <Image src={image} width={120} height={110} alt="" />
        <SNStack>
          <TitleTypography>
             {title} 
             </TitleTypography>
          <Rating
      name="simple-controlled"
      // value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      icon={<StarIcon />}// Use your custom star icon component here
    />
          <TitleTypography variant="h6">
            {" "}
            <span style={{ color: "red", fontSize: "16px" }}>$</span> {price}
          </TitleTypography>
        </SNStack>
     
    </CBStack>
  );
};

export default RenderFoodCard;
