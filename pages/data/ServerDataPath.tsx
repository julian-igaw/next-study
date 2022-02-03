import {InferGetStaticPropsType} from "next";

const ServerDataPath = (props:any)  => {
    return <div>
        <h2>page Props를 가져옵니다.</h2>
        <p>{JSON.stringify(props)}</p>
        <h2>서버 데이터도 가져옵니다.</h2>
        <p>{JSON.parse(props.posts).text}</p>
    </div>
}


export async function getServerSideProps(ctx:any) {
    const res = await fetch('http://localhost:3000/api/testAPI')
    const posts:string = await res.text()
    console.log('posts!!!!',JSON.parse(posts).text,'ctx:::::::',ctx.query)
    return {
        props: {
            posts,
        },
    }
}


export default ServerDataPath