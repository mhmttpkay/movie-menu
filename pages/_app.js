import '../styles/global.css'
import Header from '../component/header';
import Search from '../component/search'

export default function App({ Component, pageProps }) {

  return <>
    <Search/>
    <Header />
    <Component {...pageProps} />
  </>
}