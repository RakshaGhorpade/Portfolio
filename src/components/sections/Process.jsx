import React from "react";
import styled from "styled-components";

const processSteps = [
  {
    number: "01",
    title: "Understand the Problem",
    description:
      "I start by understanding the project goals, business objectives, and user needs. This helps me identify the core problem and define the direction for the design process.",
  },
  {
    number: "02",
    title: "Research & Discovery",
    description:
      "I conduct competitor analysis, market research, and user exploration to understand behaviors, pain points, and opportunities for improvement.",
  },
  {
    number: "03",
    title: "Define the Experience",
    description:
      "Based on research insights, I create user flows, information architecture, and interaction patterns to ensure a seamless and intuitive user journey.",
  },
  {
    number: "04",
    title: "Wireframing & Ideation",
    description:
      "I explore multiple solutions through sketches and wireframes, focusing on usability, functionality, and user needs before moving into visual design.",
  },
  {
    number: "05",
    title: "Visual Design",
    description:
      "I transform ideas into high-fidelity interfaces by applying visual hierarchy, branding, design systems, and accessibility principles.",
  },
  {
    number: "06",
    title: "Prototyping",
    description:
      "I build interactive prototypes to visualize user interactions, validate concepts, and communicate design solutions effectively.",
  },
  {
    number: "07",
    title: "Testing & Iteration",
    description:
      "I gather feedback, identify usability issues, and refine the design through multiple iterations to improve the overall user experience.",
  },
  {
    number: "08",
    title: "Final Delivery",
    description:
      "I prepare organized design files, design systems, and developer-ready assets to ensure smooth implementation and consistency.",
  },
];

const Process = () => {
  return (
    <Container id="process">
      <Wrapper>
        <Title>My UX Thinking Process</Title>
        <Desc>
          A structured approach focused on solving real user problems through
          research, creativity, testing, and continuous improvement.
        </Desc>

        <Timeline>
          {processSteps.map((step) => (
            <Card key={step.number}>
              <Number>{step.number}</Number>

              <Content>
                <CardTitle>{step.title}</CardTitle>
                <CardDesc>{step.description}</CardDesc>
              </Content>
            </Card>
          ))}
        </Timeline>

        <Philosophy>
          <Quote>
            “Great design is not just about how it looks; it's about how
            effectively it solves problems and creates meaningful experiences
            for users.”
          </Quote>
        </Philosophy>
      </Wrapper>
    </Container>
  );
};

export default Process;

/* ================= STYLES ================= */

const Container = styled.div`
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 15px;
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  max-width: 700px;
  margin: 0 auto 70px;
  line-height: 1.7;
`;

const Timeline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.15);
  border-radius: 20px;
  padding: 25px;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0px 10px 30px rgba(133, 76, 230, 0.2);
  }
`;

const Number = styled.div`
  min-width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-size: 20px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 10px;
`;

const CardDesc = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.7;
`;

const Philosophy = styled.div`
  margin-top: 80px;
  padding: 40px;
  border-radius: 24px;
  text-align: center;
  background: linear-gradient(
    135deg,
    rgba(133, 76, 230, 0.15),
    rgba(133, 76, 230, 0.05)
  );
  border: 1px solid rgba(133, 76, 230, 0.2);
`;

const Quote = styled.p`
  font-size: 24px;
  line-height: 1.8;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;