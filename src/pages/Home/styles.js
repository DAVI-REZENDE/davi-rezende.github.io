import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  overflow: ${({active}) => active ? 'hidden' : 'auto'};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 50px 50px 0  50px;


  img {
    width: 250px;
  }

  @media (max-width: 425px) {
    img {
      width: 150px;
    }
  }
`;

export const ModalMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #202733;
  z-index: 9999;

  display: ${({active}) => active ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  a {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
  }
`;

export const Menu = styled.div`
  width: 50%;
  z-index: 10000;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  .row {
    display: none;
  }

  .menu-button {
    display: none;
  }

  @media (max-width: 768px) {
    justify-content: flex-end;

    .menu-item {
      display: none;
    }

    .menu-button {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 4px;
      background-color: transparent;
      border: 0;

      .row {
        display: block;
        width: 30px;
        height: 4px;
        background-color: #fff;
        border-radius: 8px;
        transition: all .5s ease-in-out;
      }
    }

  }
`;

export const Main = styled.main`
  background: radial-gradient(50% 50% at 50% 50%, #303F53 0%, rgba(32, 39, 51, 0) 100%), #202733;

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  padding: 0 50px;

  .animation {
    width: 600px;
    height: 600px;

    @media (max-width: 1024px) {
      width: 450px;
      height: 450px 
    }

    @media (max-width: 425px) {
      width: 250px;
      height: 250px 
    }

  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SideLeft = styled.div`
  z-index: 1;

  span {
    color: #86EBED;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
  }

  h1 {
    color: #fff;
    margin-top: 8px;
  }

  p {
    color: #E5E5E5;
    font-size: 16px;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    margin-bottom: 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    * {
      text-align: center;
    }
  }
`;

export const DownloadCurriculum = styled.a`
  border: 2px solid #86EBED;
  background: transparent;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 400;
  padding: 8px 24px;
  color: #86EBED;
  text-transform: uppercase;
  /* margin-top: 100px; */
  text-decoration: none;

  transition: background .2s;

  &:hover {
    background: rgba(134, 235, 237, 0.1);
  }
`;

export const SideRight = styled.div`
  z-index: 1;
`;

export const About = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #2B3443;
  padding: 50px;
  position: relative;
  
  img.bg_top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 0;
    margin-top: -10%;
  }

  img.bg_bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    transform: rotate(180deg);
    margin-bottom: -10%;
  }

  @media (max-width: 1024px) {
    img.bg_top {
      position: absolute;
      bottom: 1000px;
      left: 0;
      right: 0;
      width: 100%;
      z-index: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 130vh;
    gap: 24px;

    * {
      text-align: center;
    }
  }

  @media (max-width: 425px) {
    padding: 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* width: 40%; */

  > img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;

    border: 5px solid #86EBED;
    padding: 5px;
  }

  h3 {
    color: #fff;
    margin-top: 16px;
    margin-bottom: 8px;

    font-size: 24px;
    font-weight: 400;
  }
`;

export const Icons = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img.icon {
    width: 24px;
    height: 24px;
  }
`;

export const Details = styled.div`
  width: 60%;

  strong {
    color: #fff;
  }

  p {
    color: #A8B0B7;
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AboutMe = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 34px;

  @media (max-width: 768px) {
    justify-content: center;
  }

  img {
    width: 24px;
    height: 24px;
  }

  h3 {
    margin-left: 16px;
    color: #fff;
    text-transform: uppercase;
  }
`;

export const Skills = styled.div`
  width: 100%;
  min-height: 400px;
  position: relative;
  padding: 38px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SkillsTitle = styled.div`
  padding-top: 300px;
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  gap: 8px;
`;

export const GridSkills = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 50px);
  grid-template-rows: repeat(auto-fit, 50px);
  justify-content: space-between;
  gap: 50px;

  padding: 50px;
  /* grid-template-rows: ; */
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  span {
    color: #E5E5E5;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export const Progress = styled.div`
  width: 100%;
  height: 5px;

  border-radius: 10px;
  background-color: #000;
`;

export const Loaded = styled.div`
  width: ${({progress}) => progress}%;
  height: 5px;

  border-radius: 10px;
  background-color: ${({color}) => color};
`;

export const Projects = styled.div`
  width: 100%;
  padding: 50px;

  @media (max-width: 425px) {
    padding: 16px;
  }
`;

export const ProjectsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #fff;
`;

export const ProjectsGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;


`;

export const Project = styled.div`
  background-color: #2B3443;
  border-radius: 8px;
  padding: 16px;
  position: relative;

  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    /* width: 100%; */
    height: 10px;
    border-radius: 8px 8px 0 0;
    background-color: #86EBED;
    position: absolute;
    left: 16px;
    right: 16px;
    top: -10px;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  strong {
    font-size: 18px;
    color: #fff;
    margin-top: 16px;
  }

  p {
    font-size: 18px;
    color: #A8B0B7;
    margin-top: 8px;
  }

  .tags {
    margin-top: 8px;

    span {
      padding: 2px 4px;
      border: 1px solid #86EBED;
      border-radius: 16px;
      color: #86EBED;
      font-size: 12px;
      text-transform: uppercase;
      line-height: 40px;
      margin-right: 8px;
    }
  }

  .footer {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  a {
    background-color: #202733;
    border-radius: 8px;
    border: 0;
    color: #86EBED;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    padding: 16px;
    text-decoration: none;

    display: flex;
    justify-content: center;
  }

  .repo {
    width: min-content;
  }

  .access {
    flex: 1;
  }
`;

export const Contact = styled.div`
  width: 100%;

  .title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    h3 {
      color: #fff;
    }
  }

  p {
    color: #A8B0B7;
    text-align: center;
    margin-top: 24px;
  }

  .contacts {
    /* background-color: red; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding: 50px;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0;
    }

    .contact {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;

      @media (max-width: 768px) {
        margin-top: 24px;
      }

      @media (max-width: 425px) {
        flex-direction: column;
        font-size: 12px;
      }

      span, a {
        color: #A8B0B7;
      }

      svg {
        flex-shrink: 0;
      }
    }

  }
`;

export const Footer = styled.footer`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: #1A222B;
  border-bottom: 5px solid #86EBED;

  span {
    color: #A8B0B7;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;