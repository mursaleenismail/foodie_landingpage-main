import Header from "@/layouts/Header/header";
import HomeHero from "@/sections/home/Home-hero/Homehero";
import Menu from "@/sections/home/Our-Menu/Menu";
import Categories from "@/sections/home/Popular-categories/Categories";
import RenderFoodCard from "@/Components/RenderFoodCard/RenderFoodCard";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Services from "@/sections/home/Services/Services";
import Footer from "@/layouts/Footer/footer";
import Customer from "@/sections/home/Customer/Customer";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Container>
      <Header />
      <HomeHero />
      <Categories />
      <Menu />
      <Customer/>
      <Services/>
      <Footer/>
      </Container>
     
    </Box>
  );
}

// const HeaderContainer = ({
//   children = <></>,
//   backgroundColor = "",
// }: {
//   children?: any;
//   backgroundColor: string;
// }) => {
//   return (
//     <Box
//       sx={{
//         padding: {
//           lg: "55px 104px",
//           md: "55px 105px",
//           sm: "40px 20px",
//           xs: "0px 0px",
//         },
//         backgroundColor,
//       }}
//     >
//       {children}
//     </Box>
//   );
// };
