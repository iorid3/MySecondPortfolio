import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const WordDisplayContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 4px solid #886d38;
border-radius: 8px;
box-shadow: 4px 4px 0px #000, 6px 6px 0px #886d38, 8px 8px 0px #fff;
max-width: 500px;
padding: 8px;
margin: 16px 0;
`;

const WordDisplay = styled.div`
  padding: 10px;
  font-size: 1.2rem;
  font-family: sans-serif;
  margin: 10px;
  max-width: 80%;
`;

export default function Typewriter(props: { word: string; }) {
  const [displayedWord, setDisplayedWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < props.word.length) {
        setDisplayedWord(props.word.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex, props.word]);

  return (
    <WordDisplayContainer>
      <WordDisplay>{displayedWord}</WordDisplay>
    </WordDisplayContainer>
  );
}   