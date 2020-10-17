import Head from 'next/head'
import '../styles/Index.module.scss';
import { 
  Container,
} from '../styles/pages/Home';
import picture1 from '../assets/picture1.jpg';

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Lucas Barros</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Container>
          <div className="title">
            LUCAS<br />BARROS
            <br />
            <div className="subtitle">Fullstack Developer</div>
          </div>
          <img className="picture1" src={picture1} />
        </Container>
      </body>
    </div>
  )
}
