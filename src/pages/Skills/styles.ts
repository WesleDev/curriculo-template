import styled from 'styled-components';

export const Container = styled.div`
  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 100%;
    height: 100vh;
    margin-top: 130px;

    @media only screen and (max-width: 1440px) {
      section {
        margin-top: -400px !important;
      }

      h1 {
        margin-top: 122px !important;
      }

      div {
        h2 {
          margin-top: 46px !important;
        }
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
      h2 {
        padding-top: 100px !important;
      }
      hr {
        margin-top: -500px !important;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      margin-bottom: 40px;

      h2 {
        margin-top: 20px;
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

    ul {
      display: flex;
      flex-direction: row;
      margin-bottom: 500px;
      li {
        list-style: none;
        + li {
          margin-left: 10px;
        }
        &:hover {
          color: #6f42c1;
        }
      }
    }

    hr {
      margin-top: -100px;
    }
  }
`;
