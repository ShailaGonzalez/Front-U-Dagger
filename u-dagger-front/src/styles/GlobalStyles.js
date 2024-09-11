// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f0f0f0;
    color: #333;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus {
    outline: 2px solid #0056b3;
  }

  h1 {
    font-size: 2em;
    margin: 0;
    color: #333;
  }

  button {
    border: none;
    border-radius: 4px;
    padding: 0.5em 1em;
    font-size: 1em;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:focus {
    outline: 2px solid #0056b3; /* Añadir enfoque visible */
  }

  main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }

  /* Media Queries para dispositivos móviles */
  @media (max-width: 768px) {
    h1 {
      font-size: 1.5em;
    }

    button {
      font-size: 0.9em;
      padding: 0.4em 0.8em;
    }
  }

  /* Media Queries para dispositivos de escritorio grandes */
  @media (min-width: 1200px) {
    body {
      font-size: 18px; /* Ajustar fuente para pantallas grandes */
    }

    h1 {
      font-size: 2.5em;
    }

    button {
      font-size: 1.2em;
      padding: 0.6em 1.2em;
    }
  }
`;

export default GlobalStyles;
