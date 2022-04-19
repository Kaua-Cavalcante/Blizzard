import Head from 'next/head'
import { Banner } from 'components/Banner'
import { Games } from 'components/Games'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blizzard</title>
      </Head>
      <Banner />
      <Games />
    </>
  )
}
