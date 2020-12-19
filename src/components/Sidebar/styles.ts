import styled from 'styled-components';

export const Container = styled.div`
  width: 15%;
  background: #6f42c1;
  height: 100vh;
  min-width: 250px;
  position: fixed;
  bottom: 0;

  .nav-item > .active {
    color: #fff;
    border-bottom: 1px solid #fff;
  }

  @media only screen and (max-width: 1440px) {
    min-height: 730px;

    img {
      margin-top: -70px;
    }

    ul {
      margin-top: -30px;
      a {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }

  div {
    /* margin-left: 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 270px;

    img {
      max-width: 10rem;
      max-height: 10rem;
      margin-bottom: 30px;
      border: 0.5rem solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      transition: 0.2s;

      &:hover {
        border-color: #fff;
      }
    }

    a {
      text-decoration: none;
      color: #d2d7d3;
      margin-left: 18px;
      cursor: pointer;

      &:hover {
        color: #fff;
        transition: 0.2s;
      }
    }

    ul {
      text-align: center;
      margin-right: 30px;
      li {
        list-style: none;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: 800;
        margin-bottom: 20px;

        &:nth-child(1) {
          margin-left: 20px;
        }
        &:nth-child(4) {
          margin-left: 20px;
        }
        &:nth-child(6) {
          margin-left: 20px;
        }
      }
    }
  }
`;
