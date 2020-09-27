import Head from 'next/head'
import '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Harry Potter Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="title">Harry Potter Library</div>
      </body>
    </div>
  )
}
