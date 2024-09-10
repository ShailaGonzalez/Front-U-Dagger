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

  main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }
`;

export default GlobalStyles;
