/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.a`
width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-2 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 768px) {
    padding-top: 0.1rem;
    
  }
  @media (max-width: 425px) {
    padding-top: 0.1rem;
  }
`;

// const Text = styled.div`
//   ${tw('opacity-75 font-sans text-sm md:text-base')};
//   text-shadow: 0 2px 10px rgba(0, 0, 0, 0);
// `;

const Title = styled.div`
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-2xl tracking-wide font-sans pt-8 text-center')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 1200px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 5px;
  }
  @media (max-width: 425px) {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
 `;

const Image = styled.img`
  width: 90%;
  height: auto;
  border-radius: 3%;
  border: 1px solid white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
  @media (max-width: 425px) {
    margin-bottom: 5px;
    margin-top: 2px;
  }
`;

const ProjectCard = ({ title, link, bg, img}) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg}>
    {/* <Text>{children}</Text> */}
    <Title>{title}</Title>
    <Image src={img} alt={title} title={title} />    
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
