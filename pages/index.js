import Head from 'next/head'
import '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lucas Barros</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <div className="title">LUCAS BARROS</div>
      </body>
    </div>
  )
}
