import styled from 'styled-components';

export const Container = styled.div`
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 100%;
    height: 100vh;

    @media only screen and (max-width: 1440px) {
      top: 0;
      margin-left: 10px;
      margin-top: 300px;
      h1 {
        margin-top: 122px !important;
      }
      p {
        margin-top: 40px !important;
        margin-left: 10px;
      }

      div {
        span {
          margin-top: -220px;
        }
      }
      hr {
        margin-top: -50px !important;
      }
    }
    @media only screen and (max-width: 768px) {
      div {
        span {
          text-align: right !important;
          margin-left: 400px !important;
          width: 300px;
        }
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      margin-bottom: 16px;

      h2 {
        margin-top: 86px;
        font-size: 3.5rem;
        text-transform: uppercase;
        color: #343a40;
        margin-left: 10px;
        display: flex;
        justify-content: space-between;
      }
    }

    h3 {
      font-size: 2rem;
      margin-top: 20px;
    }
    h4 {
      font-weight: 400;
      font-size: 1.5rem;
      text-transform: uppercase;
      margin-left: 10px;
    }
    p {
      margin-top: 10px;
      max-width: 50%;
      font-size: 1.3rem;
      line-height: 1.5rem;
      font-weight: 400;
      margin-bottom: 26px;
    }

    span {
      text-align: right;
      color: #6f42c1;
      font-size: 1.3rem;
      line-height: 1.5rem;
      font-weight: 400;
      margin-top: -192px;
      padding: 20px;
      margin-right: 600px;
    }

    hr {
      margin-top: 190px;
    }
  }
`;
