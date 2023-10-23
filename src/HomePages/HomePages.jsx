import { Container } from "@mui/material";
import React from "react";
import Banner from "./modules/Banner";
import Business from "./modules/Business";
import Categories from "./modules/Categories";
import Everything from "./modules/Everything";
import Guides from "./modules/Guides";
import Inspiring from "./modules/Inspiring";
import LogoMaker from "./modules/LogoMaker";
import Popular from "./modules/Popular";
import Slides from "./modules/Slides";
import Suddenly from "./modules/Suddenly";
import YouNeedIt from "./modules/YouNeedIt";

export default function HomePages() {
  return (
    <>
      <Banner />
      <Container>
        <Popular />
        <Everything/>
        <YouNeedIt/>
        <Business/>
        <Slides/>
        <LogoMaker/>
        <Inspiring/>
        <Guides/>
        <Suddenly/>
        <Categories/>
      </Container>
    </>
  );
}
