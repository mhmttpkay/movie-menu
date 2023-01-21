import Head from 'next/head';
import Data from '../component/data';

export default function tvshow({ movies }) {
  return (
    <div>

    <Head>
      <title>Top Rated</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h2>Top Series</h2>
    <Data movies={movies} />

    <style jsx>{`
        h2{
           padding:10px 0px;
           text-align:center;
           font-weight: 500;
        }
        `}</style>
  </div>
  )
}

export async function getStaticProps() {
    const request = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=f0358b80e4017bdff78118cb6b0e9701&language=en-US&page=1`)
    const movies = await request.json();
    console.log(movies)
    return {
      props: {
        movies
      }
    }
  
  }

