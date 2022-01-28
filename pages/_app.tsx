import '../styles/globals.css'
import './_app.scss'
import '../pages/css/UserCustomCSS.scss'
import type { AppProps } from 'next/app'
import {Provider} from "mobx-react";
import RootStore from "../store/RootStore";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

const rootStore = new RootStore()

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="app">
    <Header/>
    <div className={'wrapper'}>
      <Nav/>
      <div className={'contents'}>
        <Provider rootStore={rootStore}>
          <Component {...pageProps} />
        </Provider>
      </div>
    </div>
    <Footer/>
  </div>

}

export default MyApp
