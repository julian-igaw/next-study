import {useRouter} from "next/router";

const Post = () => {
    const router = useRouter()
    const {post} = router.query
    console.log('router pathname ?? ', router.pathname);
    console.log('router query ?? ', router.query);

    return <div>
        <p>dynamic route test page</p>
        <p>입력 받은 DTest 경로:{'hihihi'}</p>
    </div>
}
export default Post()