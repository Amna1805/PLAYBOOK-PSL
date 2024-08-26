import React, { useState, useEffect } from 'react';
import Carousel from 'react-grid-carousel';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  max-width: 300px;
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto; // Centering the card
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const CardDetails = styled.div`
  text-align: left;
  margin-top: 10px;
`;

const DetailItem = styled.p`
  margin: 5px 0;
  font-size: 16px;
`;

function Sliderteam({ teams }) {
  const [viewportSize, setViewportSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 576) {
        setViewportSize('xs'); // Extra small devices (phones)
      } else if (windowWidth <= 768) {
        setViewportSize('sm'); // Small devices (tablets)
      } else if (windowWidth <= 992) {
        setViewportSize('md'); // Medium devices (landscape tablets)
      } else if (windowWidth <= 1200) {
        setViewportSize('lg'); // Large devices (desktops)
      } else {
        setViewportSize('xl'); // Extra large devices (large desktops)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let numCols = 4;
  let cardWidth = "50%";

  switch (viewportSize) {
    case 'xs':
      numCols = 1;
      cardWidth = '100%';
      break;
    case 'sm':
      numCols = 1;
      cardWidth = '100%';
      break;
    case 'md':
      numCols = 2;
      cardWidth = '75%';
      break;
    case 'lg':
      numCols = 3;
      cardWidth = '75%';
      break;
    default:
      numCols = 4;
      cardWidth = '90%';
      break;
  }

  return (
    <CarouselContainer>
      <div className="d-flex align-items-center justify-content-between p-3 m-2">
        <h2>Teams</h2>
      </div>
  
      <Carousel 
        cols={numCols} 
        rows={1} 
        gap={10} 
        loop 
        responsiveLayout={[
          {
            breakpoint: 576,
            cols: 1,
            rows: 1,
            gap: 5,
            loop: true,
          },
        ]}
        containerStyle={{
          justifyContent: 'center', // Centering Carousel
        }}
      >
        {teams.map((team, index) => (
          <Carousel.Item key={index}>
            <Card style={{ width: cardWidth }}>
              <CardImage src={team.image} alt={team.name} />
              <h3>{team.name}</h3>
              <p>{team.description}</p>
              <CardDetails>
                <DetailItem><strong>Matches:</strong> {team.matches}</DetailItem>
                <DetailItem><strong>Won:</strong> {team.won}</DetailItem>
                <DetailItem><strong>Lost:</strong> {team.lost}</DetailItem>
                <DetailItem><strong>Wickets:</strong> {team.wickets}</DetailItem>
                <DetailItem><strong>Points:</strong> {team.points}</DetailItem>
                <DetailItem><strong>Runs:</strong> {team.runs}</DetailItem>
              </CardDetails>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

export default Sliderteam;
