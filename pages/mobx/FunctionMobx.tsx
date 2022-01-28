import React, {useEffect} from "react";
import Style from './FunctionMobx.module.scss'
import {inject, observer} from "mobx-react";

const FunctionMobx = (props: any) => {
    // const [count,setCount] = useState()
    const {rootStore} = props

    useEffect(() => {
        const {rootStore} = props
    },[])

    const countPlus = () => {
        rootStore.increaseCounter()
        console.log('store::', rootStore.count)
    }

    const countMinus = () => {
        rootStore.decreaseCounter()
    }

    return <div>
        <h1>{rootStore.count}</h1>
        <button className={Style.minus} onClick={countMinus}>-</button>
        <span className={Style.area}>{rootStore.count}</span>
        <button className={Style.plus} onClick={countPlus}>+</button>
    </div>
}
export default inject("rootStore")(observer(FunctionMobx))