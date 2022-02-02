import {useRouter} from "next/router";

const DTest = () => {

    const router = useRouter()
    const {DTest,id} = router.query
    console.log('router pathname ?? ', router.pathname);
    console.log('router query ?? ', router.query);

    return <div>
        <h1>dynamic route test page</h1>
        <p>입력 받은 DTest 경로:{DTest}</p>
        <p>router.query의 값 :: {JSON.stringify(router.query)}</p>
    </div>

}

export default DTest