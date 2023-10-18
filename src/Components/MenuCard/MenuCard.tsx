import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import Star from "../../../public/Home-HeroIcons/fi-sr-star.svg";
import React from "react";
import {
  DollarSpan,
  HeartBox,
  ICNFavorite,
  ICNFavoriteBorder,
  MCCard,
  MCCardContent,
  MTBox,
  MenuImage,
  PRStack,
  RatingBox,
  RatingImage,
} from "./styled";

interface MenuCardProps {
  image?: any;
  title?: string;
  subtitle?: string;
  price?: number;
  rating?: number;
}

const MenuCard = ({ image, title, subtitle, price, rating }: MenuCardProps) => {
  return (
    <MCCard>
      <MCCardContent>
        <HeartBox>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<ICNFavoriteBorder />}
              checkedIcon={<ICNFavorite />}
            />
          </IconButton>
        </HeartBox>

        <MenuImage src={image} alt="" />

        <MTBox>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="subtitle1">{subtitle}</Typography>
        </MTBox>
        <PRStack direction="row" justifyContent="space-between">
          <Box>
            {" "}
            <Typography variant="h4">
              {" "}
              <DollarSpan>$</DollarSpan> {price}
              .00
            </Typography>{" "}
          </Box>
          <RatingBox>
            {" "}
            <RatingImage src={Star} alt="" />
            <Typography variant="h5"> {rating}</Typography>
          </RatingBox>
        </PRStack>
      </MCCardContent>
    </MCCard>
  );
};

export default MenuCard;
