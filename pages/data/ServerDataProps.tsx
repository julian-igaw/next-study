import {InferGetStaticPropsType} from 'next'
import React from "react";

interface ServerProps {
    text:string
}
// InferGetStaticPropsType<typeof getServerSideProps>
function ServerDataProps  (props: any) {
    // console.log('posts',posts)
    return <div>
        <h2>이곳은 서버에서 받아온 외부 데이터를 보여줍니다.</h2>
        <div>{JSON.parse(props.posts).text}</div>
        {/*<div>{props.posts}</div>*/}
    </div>
}

// const ServerDataProps:React.FC<ServerProps> = (props:any) => {
//     // console.log('posts',posts)
//     return <div>
//         <h2>이곳은 서버에서 받아온 외부 데이터를 보여줍니다.</h2>
//         <div>{props.posts}</div>
//     </div>
// }

// This function gets called at build time
// export async function getStaticProps() {
//     // Call an external API endpoint to get posts
//     const res = await fetch('http://localhost:3000/api/testAPI')
//     const posts: string = await res.text()
//     console.log('posts!!!!', posts)
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//         props: {
//             posts,
//         },
//     }
// }

// getServerSideProps 은 와 비슷 getStaticProps 하지만 차이점은
// getServerSideProps 빌드 시간이 아니라 모든 요청에 대해 실행된다는 것입니다.
// 매 페이지 요청시마다 호출되므로 getStaticProps보다 느리지만, 빌드 이후에도 페이지 요청마다 실행된다는 특징이 있습니다.
// 타입 :: InferGetServerSidePropsType<typeof getServerSideProps>

// export async function getServerSideProps(ctx:any) {
//     try {
//         const res = await fetch('http://localhost:3000/api/testAPI')
//         const posts:string = await res.text()
//         return {
//             props: {
//                 posts,
//             },
//         }
//     } catch (error) {
//         const posts:string = '{"text":"no DATA"}'
//         return {
//             props: {
//                 posts,
//             },
//         }
//     }
// }

ServerDataProps.getInitialProps = async (ctx:any) => {
    try {
        const res = await fetch('http://localhost:3000/api/testAPI')
        const posts:string = await res.text()
        console.log('try CATCH')
        console.log('posts::::',posts)
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

export default ServerDataProps