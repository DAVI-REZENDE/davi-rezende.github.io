import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Cpu, GitHub, Smartphone, Linkedin, AtSign } from 'react-feather';

import ProgrammingAnimation from '../../assets/programming.json'
import logoSvg from '../../assets/logo.svg'
import Background from '../../assets/background-up.svg'
import ProfileImage from '../../assets/profile.jpeg'
import Resume from '../../assets/resume.pdf'

import { 
  ModalMenu,
  Container,
  Header,
  Menu,
  Main,
  SideLeft,
  DownloadCurriculum,
  SideRight,
  About,
  Profile,
  Icons,
  Details,
  AboutMe,
  Skills,
  SkillsTitle,
  GridSkills,
  Skill,
  Progress,
  Loaded,
  Projects,
  ProjectsTitle,
  ProjectsGrid,
  Project,
  Contact,
  Footer
} from './styles';

import { skills } from '../../data/skills';
import { projects } from '../../data/projects';



export function Home() {

  const [activeMenu, setActiveMenu] = useState(false)

  function handleToggleMenu() {
    setActiveMenu(oldState => !oldState)
  }

  return (
    <Container active={activeMenu}>

      <ModalMenu active={activeMenu}>
        <a onClick={handleToggleMenu} href="#about" className="menu-item">About</a>
        <a onClick={handleToggleMenu} href="#skills" className="menu-item">Skills</a>
        <a onClick={handleToggleMenu} href="#projects" className="menu-item">Projects</a>
        <a onClick={handleToggleMenu} href="#contact" className="menu-item">Contact</a>
      </ModalMenu>

      <Header>
        <img src={logoSvg} />

        <Menu>
            <button onClick={handleToggleMenu} className="menu-button">
              <span className="row r-top" />
              <span className="row r-center" />
              <span className="row r-bottom" />
            </button>
            <a href="#about" className="menu-item">About</a>
            <a href="#skills" className="menu-item">Skills</a>
            <a href="#projects" className="menu-item">Projects</a>
            <a href="#contact" className="menu-item">Contact</a>
        </Menu>
      </Header>

      <Main>
        <SideLeft>
          <span>Developer front-end</span>
          <h1>Davi Rezende</h1>
          <p>Always learning. Attentive to details, always looking for the best results. I am a person determined to carry out what was asked of me, always giving my best in each task.</p>
          <DownloadCurriculum href={Resume} download>
            Download Resume
          </DownloadCurriculum>
        </SideLeft>

        <SideRight>
          <Player
            className="animation"
            autoplay
            src={ProgrammingAnimation}
            background="transparent"
            speed="1" 
            mode="bounce"
            loop
          >

        </Player>
        </SideRight>

      </Main>

      <About id="about">
        <img className='bg_top' src={Background} />

        <Profile>
          <img src={ProfileImage} alt="Imagem" />
          <h3>Davi Rezende</h3>
        </Profile>

        <Details>
          <AboutMe>
            <Cpu color="#86EBED" size={24} />
            <h3>About</h3>
          </AboutMe>
          <strong>Know a little more about me</strong>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Details>

        <img className='bg_bottom' src={Background} />
      </About>

      <Skills id="skills">
        <SkillsTitle>
          <Cpu color="#86EBED" size={24} />
          <h3>Skills</h3>
        </SkillsTitle>

        <GridSkills>
          {skills.map(skill => {
            return (
              <Skill>
                <span>{skill.name}</span>
                <img src={skill.icon} alt={skill.name} />
                <Progress>
                  <Loaded progress={skill.rate} color={skill.color} />
                </Progress>
              </Skill>
            )
          })}
        </GridSkills>
      </Skills>

      <Projects id="projects">
        <ProjectsTitle>
          <Cpu color="#86EBED" size={24} />
          <h3>Projects</h3>
        </ProjectsTitle>

        <ProjectsGrid>
          {projects.map(project => {

            let isHover = false

            return (
              <Project key={project.id} >
              
                <img src={project.image} alt={project.title} />

                <strong>{project.title}</strong>

                <p>{project.description}</p>

                <div className="footer">
                  <div className='tags'>
                      {project.tags.map(tag => <span key={tag.id}>{tag.name}</span>)}
                    </div>

                    <div className="buttons">
                      <a target="_blank" href={project.github_link} className="repo">
                        <GitHub size={16} color="#86EBED" />
                      </a>

                      <a target="_blank" href={project.deploy_link} className="access" >
                        Access
                      </a>
                  </div>
                </div>
              </Project>
            )
          })}
        </ProjectsGrid>
      </Projects>

      <Contact id="contact">
          <div className="title">
            <Cpu color="#86EBED" size={24} />
            <h3>Contact</h3>
          </div>

          <p>Feel free to get in touch, it will be a pleasure to meet you.
          I am available every day except Sunday.</p>

          <div className="contacts">
            <div className="side-left">
              <div className="contact">
                <Smartphone color="#86EBED" size={24} />
                <span>+55 (62) 98470-1488</span>
              </div>

              <div className="contact">
                <AtSign color="#86EBED" size={24} />
                <span>daviresendes12@gmail.com</span>
              </div>
            </div>

            <div className="side-right">
              <div className="contact">
                <Linkedin color="#86EBED" size={24} />
                <a target="_blank" href="https://www.linkedin.com/in/davirezendeps/" >https://www.linkedin.com/in/davirezendeps/</a>
              </div>

              <div className="contact">
                <GitHub color="#86EBED" size={24} />
                <a target="_blank" href="https://github.com/DAVI-REZENDE" >https://github.com/DAVI-REZENDE</a>
              </div>
            </div>
          </div>
      </Contact>

      <Footer>
        <span>&copy; Davi Rezende - 2021</span>
        <span><AtSign size={16} color='#A8B0B7' /> daviresendes12@gmail.com</span>
      </Footer>

    </Container>
  );
};