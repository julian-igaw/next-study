import {action, makeObservable, observable} from "mobx";
import React from "react";
import {observer} from "mobx-react";

export default class RootStore {
    @observable
    public test = 'come from rootStore value';
    @observable
    public count = 0

    constructor() {
        makeObservable(this); // 반드시 필요
    }
    @action
    public increaseCounter = () => {
        this.count++
        console.log('increase')
    }
    @action
    public decreaseCounter = () => {
        this.count--
        console.log('decrease')
    }
}
