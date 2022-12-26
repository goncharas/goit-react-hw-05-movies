import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from 'components/GlobalStyles';


export const MovieDetailsMain = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
  span {
    display: block;
    @media ${device.tablet} {
      margin-bottom: 32px;
    }
  }
`;

export const MovieDetailsMainWrapper = styled.div`
  @media ${device.mobileOnly} {
    text-align: center;
  }
  @media ${device.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    display: inline-block;
    max-height: 500px;
    max-width: 400px;
  }
`;

export const MovieDetailsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media ${device.tablet} {
    margin-left: 32px;
  }
  h2 {
    color: #3617fb;
  }
  h3 {
    color: #3617fb;
  }
  span {
    max-width: 1200px;
  }
`;

export const MovieDetailsGenresList = styled.ul`
  display: flex;
  @media ${device.mobileOnly} {
    justify-content: center;
  }
  li {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
`;

export const MovieDetailsAdditionalWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  margin: 32px auto;
  h3 {
    color: #3617fb;
  }
`;

export const MovieDetailsAdditionalNavigate = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  li {
    margin-top: 16px;
    padding: 8px;
    border-radius: 8px;
    border: 2px solid black;
    background-color: #3498db;
    &:not(:first-child) {
      margin-left: 16px;
    }
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.15);
      box-shadow: 0px 5px 10px bisque;
      background-color: #34dbc59e;
    }
  }
`;

export const NavTitle = styled(NavLink)`
  padding: 8px;
  color: white;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: black;
  }
`;

