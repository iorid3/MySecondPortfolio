import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import Image from "next/image";

import NavigationBar from "@/comps/NavigationBar";
import styled from "@emotion/styled";
import Myself from "../../public/myself.png";
import MediaCard from "@/comps/Card";

import CustomButton from "@/comps/Button";
import WordDisplay from "@/comps/DisplayWords";


import Lottie from "lottie-react";
import LottieFile from "../../public/myself.json";

const inter = Inter({ subsets: ["latin"] });

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  &::before {
    content: "";
    background-image: url(${Myself.src});
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.5;
    z-index: -1;
  }

  @media (min-width: 768px) {
    &::before {
      background-size: 40%;
    }
  }

  @media (max-width: 480px) {
    &::before {
      background-size: 100%;
    }
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  padding: 20px;
`;

const IntroTitle = styled.h1`
  font-family: ${inter};
  font-size: 3rem;
  color: rgba(51, 51, 51, 0.8);
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
`;

const IntroText = styled.p`
  font-family: ${inter};
  font-size: 3.5rem;
  color: black;
  text-align: center;
  color: rgba(51, 51, 51, 0.8);
  margin: 0;
`;

const HomeLottieContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
`;

export default function Home() {
  const [pageState, setPageState] = useState<boolean>(false);
  const [wordDisplayed, setWordDisplayed] = useState(false);
  const router = useRouter();
  
  const ChanegeState = () => {
    setPageState(true);
    setWordDisplayed(true);
  };

  return (
    <>
      <NavigationBar />
      {!pageState ? (
        <HomeContainer>
          <IntroContainer>
            <IntroTitle>Iori Oliver Takeshita</IntroTitle>
            <IntroText>Here is my web applications portofolio</IntroText>
            <CustomButton
              children={"Work Time ?"}
              onClick={ChanegeState}
            ></CustomButton>
          </IntroContainer>
        </HomeContainer>
      ) : (
        <HomeLottieContainer>
          <Lottie animationData={LottieFile} loop={true} />
              <WordDisplay word={"Hello there! Welcome to the world of Iori ! My name is Iori ! A world of dreams and adventures with Iori awaits! Let's go!"} />
              <CustomButton
              children={"Go to see the World?"}
              onClick={() => router.push('/work')}
            ></CustomButton>
        </HomeLottieContainer>
      )}
    </>
  );
}
