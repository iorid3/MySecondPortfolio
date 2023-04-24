import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

type CardProps = {
  imageUrl?: string;
  title?: string;
  description?: string;
  backgroundColor?: string;
  onClick?: () => void;
};

const CardContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: ${(props) => props.onClick && "pointer"};
  transition: transform 0.2s ease-in-out;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    transform: ${(props) => props.onClick && "scale(1.05)"};
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
`;

const CardImage = styled(Image)`
  object-fit: cover;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-top: 16px;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin: 16px 0 0 0;
  text-align: center;
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 16px;
`;

const CardButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export default function Card({
  imageUrl,
  title,
  description,
  backgroundColor,
  onClick,
}: CardProps) {
  return (
    <CardContainer onClick={onClick} backgroundColor={backgroundColor}>
      {imageUrl && (
        <CardImageContainer>
          <Image src={imageUrl} alt={title || "Title"} width={400} height={200} />
        </CardImageContainer>
      )}
      <div>
        <CardTitle>{title || "Title"}</CardTitle>
        <CardDescription>
          {description ||
            "Description goes here. You can put anything you want in this area."}
        </CardDescription>
      </div>
      {onClick && (
        <CardActions>
          <CardButton>Pick</CardButton>
        </CardActions>
      )}
    </CardContainer>
  );
}
