import {InferGetStaticPropsType} from "next";

function ServerDataPath (props:any)  {
    return <div>
        <h2>page Props를 가져옵니다.</h2>
        <p>{JSON.stringify(props)}</p>
        <h2>서버 데이터도 가져옵니다.</h2>
        {/*<p>{JSON.parse(props.posts).text}</p>*/}
        <p>{JSON.parse(props.posts).text}</p>
    </div>
}



ServerDataPath.getInitialProps = async (ctx:any) => {
    try {
        const res = await fetch('http://localhost:3000/api/testAPI')
        const posts:string = await res.text()
        console.log('try CATCH')
        return {
            posts
        }
    } catch (error) {
        const posts:string = '{"text":"no DATA"}'
        return {
            posts
        }
    }
}


export default ServerDataPath