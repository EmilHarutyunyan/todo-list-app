import React from "react";
import { BoxGradient, Title } from "./Banner.styled";

type BannerProps = {
  title: string;
};

const Banner: React.FC<BannerProps> = ({ title }) => {
  return (
    <BoxGradient>
      <Title variant="h1">{title}</Title>
    </BoxGradient>
  );
};

export default Banner;
