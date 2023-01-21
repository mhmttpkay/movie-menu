import Link from "next/link";

export default function Header() {
    return <header className="header">
        <nav>
            <ul>
                <li>
                    <Link href='/' legacyBehavior >
                        <a>
                            Popular Movies
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href='/top-rated' legacyBehavior>
                        <a>
                            Top Rated
                        </a>
                    </Link>
                </li>

                <li>
                    <Link href='/tv-show' legacyBehavior >
                        <a>
                            Series
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
        .header {
            background: #fff;
            box-shadow: inset 0 -1px 0 0 #e9e9e9;
        }
      
        .header ul {
            display: flex;
        }
      
        .header ul li {
            margin: 0px 60px;
        }
      
        .header ul li a:hover {
            border-bottom: 1px solid black;
      
        }
      
        .header ul li a {
            height: 60px;
            display: flex;
            text-decoration: none;
            align-items: center;
            padding: 0 0.625rem;
            color: #111;
            font-size: 1rem;
            letter-spacing: .5px;
        }
        `}</style>
    </header>
}