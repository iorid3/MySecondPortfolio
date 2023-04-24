import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Card from "@/comps/Card";
import Modal from "@/comps/Modal";
import WordDisplay from "@/comps/DisplayWords";
import worksData from "@/data/works";
import NavigationBar from "@/comps/NavigationBar";
import WorkDetails from "@/comps/WorkDetails";

const WorkPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  overflow-x:scroll;
  flex-wrap: wrap;
  height: calc(100% - 150px);
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 50px;
    height: calc(100% - 250px);
  }
`;

const Column = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  @media (max-width: 768px) {
    maxwidth: 200px;
  }
`;

type Work = {
  id: number;
  title: string;
  imageUrl?: string;
  description: string;
  backgroundColor?: string;
};

export default function WorkPage() {
  const [works, setWorks] = useState<Work[]>([]);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  useEffect(() => {
    setWorks(worksData);
  }, []);

  const handleClick = (work: Work) => {
    handleCardClick(work);
  };

  const handleCardClick = (selectedWork: Work) => {
    setSelectedWork(selectedWork);
  };
  
  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  return (
    <>
      <NavigationBar />
      <WorkPageContainer>
        <Container>
          <ColumnContainer>
            {works.map((work,index) => (
              <Column key={index}>
                <Card
                  key={work.id}
                  title={work.title}
                  imageUrl={work.imageUrl}
                  description={work.description}
                  backgroundColor={work.backgroundColor}
                  onClick={() => handleClick(work)}
                />
              </Column>
            ))}
          </ColumnContainer>
          <WordDisplay
            word={
              "Hello there! Welcome to the world of Iori! My name is Iori! A world of dreams and adventures with Iori awaits! Let's go!"
            }
          />
          {selectedWork && (
            <Modal onClose={handleCloseModal}>
              {selectedWork && (
                <WorkDetails
                  key={"wew"+selectedWork.id}
                  title={selectedWork.title}
                  imageUrl={selectedWork.imageUrl}
                  description={selectedWork.description}
                />
              )}
            </Modal>
          )}
        </Container>
      </WorkPageContainer>
    </>
  );
}
