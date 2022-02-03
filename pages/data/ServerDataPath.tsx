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
    try {
        const res = await fetch('http://localhost:3000/api/testAPI')
        const posts:string = await res.text()
        console.log('try CATCH')
        return {
            props: {
                posts,
            },
        }
    } catch (error) {
        const posts:string = "error NO DATA"
        return {
            props: {
                posts,
            },
        }
    }
}


export default ServerDataPath