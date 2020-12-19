import styled from 'styled-components';

export const Container = styled.div`
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
    height: 100vh;
    margin-top: 155px;

    @media only screen and (max-width: 1440px) {
      top: 0;
      margin-left: 10px;
      margin-top: -90px;
      h1 {
        margin-top: 122px !important;
      }
      p {
        margin-top: 40px !important;
        margin-left: 10px;
      }

      div {
        span {
          margin-top: -210px;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      div {
        span {
          text-align: right !important;
          margin-left: 400px !important;
          width: 200px;
        }
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;

      h2 {
        /* margin-top: 20px; */
        font-size: 3.5rem;
        text-transform: uppercase;
        color: #343a40;
        margin-left: 10px;
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
      }
    }

    span {
      text-align: right;
      margin-top: -175px;
      color: #6f42c1;
      font-size: 1.3rem;
      line-height: 1.5rem;
      font-weight: 400;
      margin-right: 600px;
    }

    hr {
      margin-top: 120px;
    }
  }
`;
