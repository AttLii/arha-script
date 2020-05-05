import Head from "next/head"
import ArhaScript from "../../../index"

const Home = () => (
  <div className="container">
    <Head>
      <title>Arha Script example</title>
      <ArhaScript>{`
        <script>console.log('console.log')</script>
        <script>console.warn('console.warn')</script>
        <script>console.error('console.error')</script>
      `}</ArhaScript>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <h1>Check console</h1>

    <title>Arha Script example</title>
    <ArhaScript>{`<script>console.log('help')</script>`}</ArhaScript>
  </div>
)

export default Home
