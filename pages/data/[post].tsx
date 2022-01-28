import { InferGetStaticPropsType } from 'next'
import {Router, useRouter} from "next/router";

const Post = ({posts}:any) => {
    const router = useRouter()
    // 여기 이거 소문자여야 하네
    const {post} = router.query
    console.log('post::',post)
    console.log('router pathname ?? ', router.pathname);
    console.log('router query ?? ', router.query);
    console.log('sever:::', posts)
    return <div>
        <h2>getStaticPath TEST::::::::</h2>
        <p>입력 받은 경로:{post}</p>
        <p>서버 메시지 :: {posts}</p>
        {/*<ul>*/}
        {/*    {posts.map((post:any) => (*/}
        {/*        <li>{post.title}</li>*/}
        {/*    ))}*/}
        {/*</ul>*/}
    </div>
}

export async function getStaticPaths(ctx:any) {
    const posts = [{id:'11'},{id:'aa'}]
    const paths = posts.map((poster) => ({
        params: { post: `${poster.id}` },
    }))
    console.log('Paths and ctx',paths, ctx)
    return { paths, fallback: false }
}
//
export async function getStaticProps({ params }:any) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:3001/testAPI/${params.post}`)
    const posts = await res.text()
    console.log('param and response',params.post, posts)
    // Pass post data to the page via props
    return { props: { posts } }
}



export default Post