
export default function Header() {
    return <header className="search-header">
        <div className="searchContainer">
            <div className="main-logo">
                <span>Movie Menu 🎥</span>
            </div>
            <div className="search">
                <input type='text' placeholder="Search Movie..." />
            </div>
        </div>
        <style jsx>{`
        .searchContainer {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .main-logo {
            max-width: 25%;
            padding: 10px;
        }
        
        .main-logo span {
            text-transform: uppercase;
            font-weight: 800;
            font-size: 33px;
            letter-spacing: 5px;
            font-family: math;
        }
        
        .search-header {
            padding: 20px;
            background: #fff;
            box-shadow: inset 0 -1px 0 0 #e9e9e9;
        }
        
        .search {
            position: relative;
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 480px;
            height: 45px;
            margin: 0 auto;
        }
        
        .search input {
            border: 1px solid #c1c1c1;
            width: 100%;
            height: 45px;
            padding: 14px 103px 15px 16px;
            font-size: .875rem;
            line-height: 16px;
            letter-spacing: 1px;
        }
        .search input:focus{
            outline: none;
        }
        `}</style>
    </header>
}