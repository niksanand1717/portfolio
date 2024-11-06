import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  overflow: hidden;

  .hero-text {
    position: absolute;
    text-align: center;
    color: #e0e0e0;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    color: #f5f5f5;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    color: #a29bfe;
  }
`;
