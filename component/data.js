import Link from "next/link";

export default function Data({ movies }) {
    return <div className="populerMovie">
        <div className="populerMovie-contains">
            {movies.results?.map((movie, index) => (
                <Link href={`/movie/${movie.id}`} legacyBehavior key={index}>
                    <a>
                        <span className="movievote">{movie.vote_average} ❤ </span>
                        <h3>{movie.title}</h3>
                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                    </a>
                </Link>
            ))}
        </div>
        <style jsx>{`
        .populerMovie{
            width:1200px;
            margin:0 auto;
            background-color: white;
            padding: 10px;
        }
        .populerMovie h2{
            font-size:40px;
            margin-bottom:20px;
        }
        .populerMovie-contains{
            display:flex;
            flex-wrap:wrap;
            gap:13.3px;
        }
        .populerMovie-contains a{
            width: calc(25% - 10px);
            position:relative;
        }
        .populerMovie-contains a h3{
            font-size:20px;
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            color:#fff;
            background:linear-gradient(to top, #000, transparent);
            padding: 50px 20px 20px 20px;
        }
        .populerMovie-contains a img{
            width:100%;
        }
        .movievote{
            color: white;
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px 10px;
    background: black;
    border-radius: 10px;
    font-size: 12px;
        }
        `}</style>
    </div>
}