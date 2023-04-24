import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

type CardGridProps = {
  cards: {
    imageUrl?: string;
    title?: string;
    description?: string;
    backgroundColor?: string;
    onClick?: () => void;
  }[];
};

const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 16px;
`;

export default function CardGrid({ cards }: CardGridProps) {
  return (
    <CardGridContainer>
      {cards.map((card, index) => (
       <CardGrid cards={cards} />
      ))}
    </CardGridContainer>
  );
}