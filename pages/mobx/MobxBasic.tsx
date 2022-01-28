import {inject, observer, Observer} from "mobx-react";
import React from 'react';
import RootStore from "../../store/RootStore";
import Style from "./FunctionMobx.module.scss";

interface MobxBasicProps {

}

interface StoreProps extends MobxBasicProps{
    rootStore:RootStore
}

@inject("rootStore")
@observer
export default class MobxBasic extends React.Component<MobxBasicProps, any> {

    constructor(props:any) {
        super(props);
    }

    componentDidMount() {
        const {rootStore} = this.props as StoreProps
    }

    countPlus = () => {
        const {rootStore} = this.props as StoreProps
        rootStore.increaseCounter()
        console.log('store::',rootStore.count)
    }

    countMinus = () => {
        const {rootStore} = this.props as StoreProps
        rootStore.decreaseCounter()
    }

    render() {
        const {rootStore} = this.props as StoreProps
        console.log('render')
        return (
            <div>
                <h1>{rootStore.count}</h1>
                <button className={Style.minus} onClick={this.countMinus}>-</button>
                <span className={Style.area}>{rootStore.count}</span>
                <button className={Style.plus} onClick={this.countPlus}>+</button>
            </div>
        );
    }
}
