import type { NextPage } from 'next'
import Head from 'next/head'
import CategoryBox from '../components/category_box'
import categories from '../public/data.json'

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

      <div className="grid grid-cols-3 px-32 py-8">
        {categories.map(category => (<CategoryBox key={category.id} title={category.name} questions={category.questions}></CategoryBox>))}
      </div>
    </div>
  )
}

export default Home
