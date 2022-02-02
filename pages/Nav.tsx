import Link from "next/link";
import React from "react";

const Nav = () => {
    return <div className={'nav'}>
        <div>
            <h1>Data SSR</h1>
            <p>첫 렌더시 데이터 불러와 SEO 가능</p>
            <ul>
                <li><Link href={"/data/ServerDataProps"}><a>ServerDataProps</a></Link></li>
                <li><Link href={"/data/ServerDataPropsClass"}><a>ServerDataPropsClass</a></Link></li>
                <li><Link href={"/data/ServerDataPath"}><a>pageProps</a></Link></li>
                <li><Link href={"/data/aa"}><a>DynamicServerDataPath</a></Link></li>
                <li><Link href={"/data/InitialProps"}><a>getInitialProps</a></Link></li>
                <li><Link href={"/data/InitialPropsClass"}><a>getInitialPropsClass</a></Link></li>
            </ul>
            <h1>Route</h1>
            <ul>
                <li><Link href={"/Blog"}><a>Blog</a></Link></li>
                <li><Link href={"/route/abc"}><a>go to : [DTest.tsx] /route/abc</a></Link></li>
                <li><Link href={"/route/abc?foo=bar"}><a>go to : /route/abc?foo=bar</a></Link></li>
                <li><Link href={"/route/abc?DTest=123"}><a>go to : /route/abc?DTest=123</a></Link></li>
                <li><Link href={"/route/a/b/c/d/e/f/g"}><a>go to : /route/a/b/c</a></Link></li>
                <li><Link href={"/route/abc/id-abc"}><a>go to : /route/abc/id-abc</a></Link></li>
            </ul>
        </div>
        <div>
            <h1>Module CSS</h1>
            <ul>
                <li><Link href={"/css/ModuleCSSTest"}><a>ModuleCSSTest</a></Link></li>
                <li><Link href={"/css/ClassNameTest"}><a>ClassNameTest</a></Link></li>
                <li><Link href={"/css/UserCustomCSS"}><a>UserCustomCSS</a></Link></li>
                <li><Link href={"/css/CSSInJS"}><a>CSS IN JS test</a></Link></li>
            </ul>
        </div>
        <div>
            <h1>Mobx & Store</h1>
            <ul>
                <li><Link href={"/mobx/MobxBasic"}><a>Mobx Basic</a></Link></li>
                <li><Link href={"/mobx/FunctionMobx"}><a>FunctionMobx</a></Link></li>
            </ul>
        </div>
    </div>
}
export default Nav