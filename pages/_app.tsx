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
  console.log('#################render _app.tsx')
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

MyApp.getInitialProps = async ({ Component, ctx }:any) => {
  console.log('#############render GetInitialProps')
  let pageProps = {};
  // 하위 컴포넌트에 getInitialProps가 있다면 추가 (각 개별 컴포넌트에서 사용할 값 추가)
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  // _app에서 props 추가 (모든 컴포넌트에서 공통적으로 사용할 값 추가)
  pageProps = { ...pageProps, posttt: { title: 11111, content: 3333 } };

  return { pageProps };
};

export default MyApp
