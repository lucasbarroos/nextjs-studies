import Head from 'next/head'
import '../styles/Index.module.scss';
import picture1 from '../assets/picture1.jpg';
import picture2 from '../assets/picture2.jpg';

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
            LUCAS<br />BARROS
            <br />
            <div className="subtitle">Fullstack Developer</div>
          </div>
          <img className="picture1" src={picture1} />
        </div>
        <div class="about-container">
          <div className="about-border-effect" />
          <div className="about-section">
              <div className="about-section-picture-content">
                <img className="about-section-picture" src={picture2} />
              </div>
              <span className="about-section-text">
                I'm a Fullstack Developer with 6 years of experience.
                I really love studing, without excuses. Every time I’m searching for new features and ideas to increment my career. 
                When you love you profession, you will never work.
              </span>
          </div>
        </div>
      </body>
    </div>
  )
}
