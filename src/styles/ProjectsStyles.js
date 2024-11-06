import styled from "styled-components";

export const ProjectsContainer = styled.section`
  padding: 5rem 10%;
  background-color: #1b1b1b;

  h2 {
    font-size: 2.5rem;
    color: #e0e0e0;
    text-align: center;
    margin-bottom: 2rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .project-card {
    background-color: #333;
    border-radius: 10px;
    padding: 1.5rem;
    transition: transform 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    }

    h3 {
      font-size: 1.5rem;
      color: #f5f5f5;
    }

    p {
      font-size: 1rem;
      color: #c7c7c7;
      margin-top: 0.5rem;
    }
  }
`;
