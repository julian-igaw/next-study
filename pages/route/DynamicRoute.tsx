import {useRouter} from "next/router";

const DynamicRoute = () => {
    const router = useRouter()
    const {DTest} = router.query
    console.log('PID::',DTest)
    return <div>
        <p>입력 받은 DTest:{DTest}</p>
        <br/>
        {/*<p><link href={'/data/SimpleRoute.tsx'}>SimpleRoute 로 이동</link></p>*/}
    </div>
}
export default DynamicRoute