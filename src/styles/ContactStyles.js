import styled from "styled-components";

export const ContactContainer = styled.section`
  padding: 5rem 10%;
  background-color: #1b1b1b;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #e0e0e0;
    margin-bottom: 1.5rem;
  }

  .contact-form {
    max-width: 600px;
    margin: 0 auto;

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
      border: none;
      border-radius: 5px;
      background-color: #333;
      color: #f5f5f5;
    }

    button {
      padding: 0.75rem 2rem;
      border-radius: 5px;
      border: none;
      background-color: #a29bfe;
      color: #1b1b1b;
      font-weight: bold;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #6c5ce7;
      }
    }
  }
`;
