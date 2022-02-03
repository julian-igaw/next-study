import {useRouter} from "next/router";

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
        <p>서버 메시지 :: {JSON.parse(posts).text}</p>
    </div>
}

export async function getStaticPaths(ctx:any) {
    const posts = [{id:'11'},{id:'aa'}]
    const paths = posts.map((poster) => ({
        params: { post: `${poster.id}` },
    }))
    console.log('Paths and ctx',paths,'ctx', ctx)
    return { paths, fallback: false }
}

export async function getStaticProps({ params }:any) {
    try {
        const res = await fetch(`http://localhost:3000/api/${params.post}`)
        const posts = await res.text()
        return { props: { posts } }
    } catch (error) {
        const posts = "error NO DATA"
        return { props: { posts } }
    }
}



export default Post