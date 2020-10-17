import Head from 'next/head'
import '../styles/Index.module.scss';
import picture1 from '../assets/picture1.jpg';
import picture2 from '../assets/picture2.jpg';
// import logos
import awsLogo from '../assets/aws.png';
import dockerLogo from '../assets/docker.jpg';
import jestLogo from '../assets/jest.png';
import mongoLogo from '../assets/mongo.png';
import nodeLogo from '../assets/node.jpg';
import reactLogo from '../assets/react.png';
import reduxLogo from '../assets/redux.png';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Lucas Barros</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <div className="container">
          <div className="title">
            Lucas<br />Barros
            <br />
            <div className="subtitle"><span>F</span>ullstack Developer</div>
          </div>
          <img className="picture1" src={picture1} />
        </div>
        <div className="about-container">
          <div className="about-border-effect" />
          <div className="about-section">
            <div className="about-section-first-content">
              <div className="about-section-picture-content">
                <img className="about-section-picture" src={picture2} />
              </div>
              <span className="about-section-text">
                I'm a Fullstack Developer with 6 years of experience.
                I really love coding and studying, without excuses. Every time I’m searching for new features and ideas to increment my career. 
                When you love your profession, you will never work.
              </span>
            </div>
            <div className="about-section-second-content">
              <p>Some technologies and tools</p>
              <div className="about-section-icons">
                <img className="about-section-icon" src={reactLogo} />
                <img className="about-section-icon-rounded" src={nodeLogo} />
                <img className="about-section-icon-rounded" src={mongoLogo} />
                <img className="about-section-icon" src={reduxLogo} />
                <img className="about-section-icon" src={jestLogo} />
                <img className="about-section-icon-rounded" src={awsLogo} />
                <img className="about-section-icon-rounded" src={dockerLogo} />
              </div>
            </div>
          </div>
          <div className="about-border-effect-end" />
        </div>
      </body>
    </div>
  )
}
