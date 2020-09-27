import Head from 'next/head'
import '../styles/Home.module.scss';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Harry Potter Library</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="example">How it works</div>
      </body>
    </div>
  )
}
