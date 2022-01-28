import {useRouter} from "next/router";

const Comment = () => {

    const router = useRouter()
    const {DTest,id} = router.query
    console.log('router pathname ?? ', router.pathname);
    console.log('router query ?? ', router.query);

    return <div>
        <p>dynamic route test page</p>
        <p>{JSON.stringify(router.query)}</p>
    </div>

}

export default Comment