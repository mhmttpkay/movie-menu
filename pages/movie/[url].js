import Link from 'next/link';

export default function MovieDetail({ movie }) {
    console.log(movie)
    return <>
        <div className="movieDetailContainer">
            <div className='movieDetailMain'>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} className="movieDetailImg" />
                <span className='movievote'>{movie.vote_average} ❤ </span>
            </div>

            <div className='movieDataContent'>
                <div className='movieGenres'>
                    {movie.genres?.map((item, index) => (
                        <div className='genre' key={index}>{item.name}</div>
                    ))}
                </div>
                <h1 className="movieTitle">{movie.original_title}</h1>
                <span className='movieOverview'>{movie.overview || "İçerik hakkında henüz bir genel bakış bulunmuyor. "}</span>
                <div className='movieCompanies'>
                    <h3>Yapımcılar</h3>
                    <div className='companies'>
                        {movie.production_companies?.map((item, index) => (
                            <div className='prdCompanies' key={index}>- {item.name}</div>
                        ))}
                    </div>
                </div>
                <div className='movieRelease'>
                    {movie.release_date}
                </div>
                <div className='firstBackToPage'>
                    <Link href='/' legacyBehavior>
                        <a>🡰 Geri dön</a>
                    </Link>
                </div>
            </div>

        </div>

        <style jsx>{`
        .movieDetailContainer{
            width: 1200px;
            height:auto;
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
            margin: 0px auto;
        }
        .movieDetailMain{
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
        }
        .movieDetailImg{
            width: 80%;
            padding:10px;
        }
        .movievote{
            color: white;
            position: absolute;
            right: 80px;
            top: 20px;
            padding: 5px 10px;
            background: black;
            border-radius: 10px;
            font-size: 12px;
        }
        .movieDataContent{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .movieTitle{
            height: min-content;
            padding: 5px;
            font-weight: 500;
            line-height: 20px;
        }
        .movieOverview{
            width: 100%;
            padding: 10px;
            font-size: 15px;
        }
        .movieGenres{
            display: flex;
            padding: 10px;
            margin-bottom: 40px;
            width: 100%;
            justify-content: flex-start;

        }
        .genre{
            margin-right: 15px;
            border: 1px solid #000;
            padding: 5px 10px;
            font-size: 12px;
            border-radius: 10px;
            color: #000;
        }
        .companies{
            display: flex;
            flex-direction: column;
        }
        .movieCompanies{
            width: 100%;
            padding: 10px;
            font-size: 15px;
        }
        .movieCompanies h3{
            padding: 5px;
            font-weight: 500;
            line-height: 20px;
        }
        .prdCompanies{
            margin-bottom:5px;
        }
        .movieRelease{
            width: 100%;
            padding: 10px;
            font-size: 15px;
            display: flex;
            justify-content: end;
        }
        .firstBackToPage{
            width: 100%;
            padding: 10px;
            font-size: 15px;
            display: flex;
            justify-content: flex-start;
        }
        .firstBackToPage a{
            text-decoration: none;
        }

        `}</style>
    </>
}





export async function getServerSideProps({ params }) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=f0358b80e4017bdff78118cb6b0e9701&language=tr-TR&page=1`)
    const movie = await request.json();
    return {
        props: {
            movie
        }
    }

}