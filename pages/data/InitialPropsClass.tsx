import React, {Component} from 'react';

interface InitialPropsClassProps {
    text:string
}

export default class InitialPropsClass extends React.Component<InitialPropsClassProps, any> {
    static async getInitialProps({ctx}:any) {
        const res = await fetch('http://localhost:3001/testAPI')
        const posts: string = await res.text()
        return {text:posts}
    }

    render() {
        console.log('TEXT:::',this.props)
        return (
            <div>
                <p>Response is:::: {this.props.text}</p>
            </div>
        );
    }
}