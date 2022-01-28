import type {NextPage} from 'next'
import Link from 'next/link'
import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import RootStore from "../store/RootStore";
import FunctionMobx from "./mobx/FunctionMobx";
import Header from "./Header";
import {Head} from "next/document";
import Nav from "./Nav";

interface StoreProps {
    rootStore: RootStore;
}

@inject('rootStore')
@observer
export default class Index extends React.Component<StoreProps, any> {

    componentDidMount() {
        const {rootStore} = this.props as StoreProps
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h2>여기는 index.tsx 초기 페이지 입니다.</h2>
            </div>
        );
    }
}

