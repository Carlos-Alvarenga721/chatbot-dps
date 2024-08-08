import Head from 'next/head'
import Chatbot from '/src/app/components/Chatbot'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Chatbot</title>
        <meta name="description" content="Chatbot application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Chatbot />
      </main>
    </div>
  )
}
