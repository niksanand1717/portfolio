import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #1b1b1b;
    color: #f5f5f5;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  ul {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #d1d1d1;
    text-align: center;
    max-width: 800px;
  }

  button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: #333;
    color: #f5f5f5;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #555;
  }

  /* Responsive styling */
  @media (max-width: 1024px) {
    h1 {
      font-size: 2.2rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 0.95rem;
      padding: 0 1rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 576px) {
    body {
      // padding: 0.5rem;
    }
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.85rem;
    }
    button {
      padding: 0.4rem 0.8rem;
    }
  }
`;
