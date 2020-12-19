import styled from 'styled-components';

export const Landing = styled.div`
  display: flex;
  flex-direction: space-between;
  position: absolute;
`;

export const Right = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  margin-left: 60px;
  position: relative;
  left: 275px;
  top: 50px;

  @media only screen and (max-width: 1440px) {
    top: 0;
    margin-left: 10px;
    h1 {
      margin-top: 122px !important;
    }
    p {
      margin-top: 40px !important;
      margin-left: 10px;
    }

    hr {
      margin-bottom: 100px;
    }
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    left: 175px;
    section {
      p {
        font-size: 18px;
        max-width: 500px;
      }
    }
  }

  h1 {
    font-size: 6rem;
    color: #212529;
    text-transform: uppercase;
    font-weight: 800;
    margin-top: 250px;

    span {
      color: #6f42c1;
    }
  }

  h3 {
    margin-top: -30px;
    text-transform: uppercase;
    color: #495057;
    margin-left: 10px;

    a {
      text-decoration: none;
      color: #6f42c1;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  p {
    margin-top: 80px;
    font-size: 1.5rem;
    color: #868e96;
    margin-left: 10px;
    max-width: 60%;
  }

  div {
    margin-top: 20px;
    display: flex;
    flex-direction: row;

    div {
      a {
        color: #495057;
        transition: 0.2s;

        &:hover {
          color: #6f42c1;
        }
      }
    }
  }
  hr {
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 190px;
    width: 100%;
  }
`;
