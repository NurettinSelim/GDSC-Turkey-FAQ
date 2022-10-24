import type { NextPage } from 'next'
import Head from 'next/head'
import QuestionBox from '../components/question_box'
import qas from '../public/data.json'

const Home: NextPage = () => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-darkGreen to-green'>
      <Head>
        <title>GDSC Turkiye FAQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-20 justify-center items-center w-full h-40 text-center bg-gradient-to-b from-white/10">
        <h1 className="text-4xl font-medium">GDSC Turkiye FAQ</h1>
        <h2>Bu sayfa sıklıkla sorulan soruları toplamak için yapılmıştır.</h2>
      </div>
      

      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-md rounded-2xl p-2">
          {qas.map(qa => (<QuestionBox key={qa.id} question={qa.question} answer={qa.answer} />))}
        </div>
      </div>
      
    </div>
  )
}

export default Home
