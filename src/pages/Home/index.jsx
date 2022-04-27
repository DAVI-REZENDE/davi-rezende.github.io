import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Cpu, GitHub, Smartphone, Linkedin, AtSign } from 'react-feather';

import ProgrammingAnimation from '../../assets/programming.json'
import Background from '../../assets/background-up.svg'
import ProfileImage from '../../assets/profile.jpeg'
import Resume from '../../assets/resume.pdf'

import { 
  Container,
  Main,
  SideLeft,
  DownloadCurriculum,
  SideRight,
  About,
  Profile,
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
import { Navbar } from '../../components/Navbar';

export function Home() {

  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <Container active={activeMenu}>

      <Navbar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />


      <Main>
        <SideLeft>
          <span>Developer front-end</span>
          <h1>Davi Rezende</h1>
          <p>I chose the front-end because I like to produce beautiful interfaces that are nice to look at, I'm focused on the ReactJS library to develop, but I can quickly learn new ways to develop</p>
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
          <p>Always learning new ways to develop. Attentive to details, always looking for the best results. I am a person determined to fulfill what was asked of me, always giving my best in every task, I am 16 years old and have studied programming since I was 12 years old, progressing more every day to be ready for the job market.</p>
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
        <span>&copy; Davi Rezende - 2022</span>
        <span><AtSign size={16} color='#A8B0B7' /> daviresendes12@gmail.com</span>
      </Footer>
    </Container>
  );
};