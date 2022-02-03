import React, {Component} from 'react';

interface InitialPropsClassProps {
    text:string
}

export default class InitialPropsClass extends React.Component<InitialPropsClassProps, any> {
    static async getInitialProps({ctx}:any) {
        try {
            const res = await fetch('http://localhost:3000/api/testAPI')
            const posts: string = await res.text()
            return {text:posts}
        }catch (error) {
            const posts: string = 'error NO DATA'
            return {text:posts}
        }
    }

    render() {
        console.log('TEXT:::',this.props)
        return (
            <div>
                <p>Response is:::: {JSON.parse(this.props.text).text}</p>
            </div>
        );
    }
}