import Header from '@/layouts/Header/header'
import HomeHero from '@/sections/home/Home-hero/Homehero'
import Menu from '@/sections/home/Our-Menu/Menu'
import Categories from '@/sections/home/Popular-categories/Categories'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Image from 'next/image'

export default function Home() {
  return (
  <Box>
    {/* <HeaderContainer backgroundColor='white'>
    <Header/>
    <HomeHero/>
    </HeaderContainer>
     */}
   
    <Stack>
    <Categories/>
    <Menu/>
    </Stack>
  </Box>
  )
}


const HeaderContainer = ({
  children = <></>,
  backgroundColor = "",
}: {
  children?: any;
  backgroundColor: string;
}) => {
  return (
    <Box
      sx={{
        padding: {
          lg: "55px 104px",
          md: "55px 105px",
          sm: "40px 20px",
          xs: "0px 0px",
        },
        backgroundColor,
      }}
    >
      {children}
    </Box>
  );
};
