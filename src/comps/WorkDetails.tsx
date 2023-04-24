import styled from "@emotion/styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 16px;
`;

const Image = styled.img`
  width: 100%;
  nax-height:400px ;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  color: black;
  text-align: center;

`;

type WorkDetailsProps = {
  title?: string;
  imageUrl?: string;
  description?: string;
  backgroundColor?: string;
};

export default function WorkDetails({
  title,
  imageUrl,
  description,
}: WorkDetailsProps) {
  return (
    <CardContainer >
      <Title>{title}</Title>
      {imageUrl && <Image src={imageUrl} alt={title} />}
      <Description>{description}</Description>
    </CardContainer>
  );
}