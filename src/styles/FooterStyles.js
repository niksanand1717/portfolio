import styled from "styled-components";

export const FooterContainer = styled.section`
  padding: 5rem 10%;
  background-color: #2d2d2d;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #e0e0e0;
    margin-bottom: 2rem;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .footer-item {
    background-color: #444;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1.1rem;
    color: #d1d1d1;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.3em;

    &:hover {
      background-color: #555;
      color: #a29bfe;
    }
  }
`;
