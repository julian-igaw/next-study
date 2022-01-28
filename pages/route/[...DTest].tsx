import {useRouter} from "next/router";

const DTest = () => {

    const router = useRouter()
    const {DTest,id} = router.query
    console.log('router pathname ?? ', router.pathname);
    console.log('router query ?? ', router.query);

    return <div>
        <p>dynamic route test page</p>
        <p>입력 받은 DTest 경로:{DTest}</p>
    </div>

}

export default DTest